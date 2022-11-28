package operations

var ConfirmPaymentOfTransaction5ServerList = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmPaymentOfTransaction5RequestBody struct {
	ConfirmTransaction string `form:"name=confirmTransaction"`
	TransactionID      string `form:"name=transaction_id"`
}

type ConfirmPaymentOfTransaction5Request struct {
	ServerURL *string
	Request   *ConfirmPaymentOfTransaction5RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ConfirmPaymentOfTransaction5Response struct {
	ContentType string
	StatusCode  int64
}
