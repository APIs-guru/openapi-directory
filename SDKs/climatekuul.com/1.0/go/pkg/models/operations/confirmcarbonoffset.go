package operations

var ConfirmCarbonOffsetServerList = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmCarbonOffsetRequestBody struct {
	CarbonOffset     string  `form:"name=carbonOffset"`
	ContactEmail     *string `form:"name=contactEmail"`
	ContactFirstName *string `form:"name=contactFirstName"`
	ContactLastName  *string `form:"name=contactLastName"`
	TransactionID    string  `form:"name=transaction_id"`
}

type ConfirmCarbonOffsetRequest struct {
	ServerURL *string
	Request   *ConfirmCarbonOffsetRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ConfirmCarbonOffsetResponse struct {
	ContentType string
	StatusCode  int64
}
