package operations

var ConfirmPaymentServerList = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmPaymentRequestBody struct {
	APIKeyL1       string `form:"name=apiKey_l1"`
	APIKeyL2       string `form:"name=apiKey_l2"`
	ConfirmPayment string `form:"name=confirmPayment"`
	PaymentID      int32  `form:"name=paymentID"`
	TransactionID  string `form:"name=transaction_id"`
}

type ConfirmPaymentRequest struct {
	ServerURL *string
	Request   *ConfirmPaymentRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ConfirmPaymentResponse struct {
	ContentType string
	StatusCode  int64
}
