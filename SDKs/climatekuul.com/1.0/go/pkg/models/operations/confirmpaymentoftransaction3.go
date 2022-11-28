package operations

var ConfirmPaymentOfTransaction3ServerList = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmPaymentOfTransaction3RequestBody struct {
	ConfirmTransaction string `form:"name=confirmTransaction"`
	TransactionID      string `form:"name=transaction_id"`
}

type ConfirmPaymentOfTransaction3Request struct {
	ServerURL *string
	Request   *ConfirmPaymentOfTransaction3RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ConfirmPaymentOfTransaction3Response struct {
	ContentType string
	StatusCode  int64
}
