var pathweb ="http://localhost/mbaknovi2/";
var login = pathweb + "Api/login";
var getbuku = pathweb + "Api/bukuJSON";

// var getbuku =pathweb+"api/bukuJSON";
// var getpengarang =pathweb+"api/pengarangJSON";
// var getpenerbit =pathweb+"api/penerbitJSON";
// var tambahbuku =pathweb+"api/tambahJSON";

function ceklogin(){
    if(localStorage.sihab=='' ||localStorage.sihab == undefined){
        window.location.href='login.html';
    }
}