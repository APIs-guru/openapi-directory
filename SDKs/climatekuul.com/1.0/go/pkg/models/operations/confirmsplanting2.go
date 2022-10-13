package operations

var ConfirmsPlanting2Servers = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmsPlanting2RequestBody struct {
	APIKeyL1        string `form:"name=apiKey_l1"`
	APIKeyL2        string `form:"name=apiKey_l2"`
	ConfirmPlanting string `form:"name=confirmPlanting"`
	TransactionID   string `form:"name=transaction_id"`
}

type ConfirmsPlanting2Request struct {
	ServerURL *string
	Request   *ConfirmsPlanting2RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ConfirmsPlanting2Response struct {
	ContentType string
	StatusCode  int64
}
