package operations

var ConfirmsPlanting3ServerList = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmsPlanting3RequestBody struct {
	APIKeyL1        string `form:"name=apiKey_l1"`
	APIKeyL2        string `form:"name=apiKey_l2"`
	ConfirmPlanting string `form:"name=confirmPlanting"`
	TransactionID   string `form:"name=transaction_id"`
}

type ConfirmsPlanting3Request struct {
	ServerURL *string
	Request   *ConfirmsPlanting3RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ConfirmsPlanting3Response struct {
	ContentType string
	StatusCode  int64
}
