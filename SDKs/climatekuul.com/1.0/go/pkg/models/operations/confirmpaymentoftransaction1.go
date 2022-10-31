package operations

var ConfirmPaymentOfTransaction1Servers = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmPaymentOfTransaction1RequestBody struct {
	ConfirmTransaction string `form:"name=confirmTransaction"`
	TransactionID      string `form:"name=transaction_id"`
}

type ConfirmPaymentOfTransaction1Request struct {
	ServerURL *string
	Request   *ConfirmPaymentOfTransaction1RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ConfirmPaymentOfTransaction1Response struct {
	ContentType string
	StatusCode  int64
}
