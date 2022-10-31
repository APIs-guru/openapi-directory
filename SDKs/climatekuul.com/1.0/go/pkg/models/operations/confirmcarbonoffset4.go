package operations

var ConfirmCarbonOffset4Servers = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmCarbonOffset4RequestBody struct {
	CarbonOffset     string  `form:"name=carbonOffset"`
	ContactEmail     *string `form:"name=contactEmail"`
	ContactFirstName *string `form:"name=contactFirstName"`
	ContactLastName  *string `form:"name=contactLastName"`
	TransactionID    string  `form:"name=transaction_id"`
}

type ConfirmCarbonOffset4Request struct {
	ServerURL *string
	Request   *ConfirmCarbonOffset4RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ConfirmCarbonOffset4Response struct {
	ContentType string
	StatusCode  int64
}
