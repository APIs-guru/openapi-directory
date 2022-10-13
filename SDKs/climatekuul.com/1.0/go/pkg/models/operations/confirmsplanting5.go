package operations

var ConfirmsPlanting5Servers = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmsPlanting5RequestBody struct {
	APIKeyL1        string `form:"name=apiKey_l1"`
	APIKeyL2        string `form:"name=apiKey_l2"`
	ConfirmPlanting string `form:"name=confirmPlanting"`
	TransactionID   string `form:"name=transaction_id"`
}

type ConfirmsPlanting5Request struct {
	ServerURL *string
	Request   *ConfirmsPlanting5RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ConfirmsPlanting5Response struct {
	ContentType string
	StatusCode  int64
}
