package operations

var ConfirmPaymentOfTransactionServers = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmPaymentOfTransactionRequestBody struct {
	ConfirmTransaction string `form:"name=confirmTransaction"`
	TransactionID      string `form:"name=transaction_id"`
}

type ConfirmPaymentOfTransactionRequest struct {
	ServerURL *string
	Request   *ConfirmPaymentOfTransactionRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ConfirmPaymentOfTransactionResponse struct {
	ContentType string
	StatusCode  int64
}
