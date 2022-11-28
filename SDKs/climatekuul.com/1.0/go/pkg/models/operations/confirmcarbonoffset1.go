package operations

var ConfirmCarbonOffset1ServerList = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmCarbonOffset1RequestBody struct {
	CarbonOffset     string  `form:"name=carbonOffset"`
	ContactEmail     *string `form:"name=contactEmail"`
	ContactFirstName *string `form:"name=contactFirstName"`
	ContactLastName  *string `form:"name=contactLastName"`
	TransactionID    string  `form:"name=transaction_id"`
}

type ConfirmCarbonOffset1Request struct {
	ServerURL *string
	Request   *ConfirmCarbonOffset1RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ConfirmCarbonOffset1Response struct {
	ContentType string
	StatusCode  int64
}
