package operations

var ConfirmPayment4ServerList = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmPayment4RequestBody struct {
	APIKeyL1       string `form:"name=apiKey_l1"`
	APIKeyL2       string `form:"name=apiKey_l2"`
	ConfirmPayment string `form:"name=confirmPayment"`
	PaymentID      int32  `form:"name=paymentID"`
	TransactionID  string `form:"name=transaction_id"`
}

type ConfirmPayment4Request struct {
	ServerURL *string
	Request   *ConfirmPayment4RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ConfirmPayment4Response struct {
	ContentType string
	StatusCode  int64
}
