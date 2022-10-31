package operations


var ConfirmPaymentOfTransaction4Servers = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmPaymentOfTransaction4RequestBody struct {
    ConfirmTransaction string `form:"name=confirmTransaction"`
    TransactionID string `form:"name=transaction_id"`
    
}

type ConfirmPaymentOfTransaction4Request struct {
    ServerURL *string 
    Request *ConfirmPaymentOfTransaction4RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type ConfirmPaymentOfTransaction4Response struct {
    ContentType string 
    StatusCode int64 
    
}

