package operations


var ConfirmCarbonOffset3Servers = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmCarbonOffset3RequestBody struct {
    CarbonOffset string `form:"name=carbonOffset"`
    ContactEmail *string `form:"name=contactEmail"`
    ContactFirstName *string `form:"name=contactFirstName"`
    ContactLastName *string `form:"name=contactLastName"`
    TransactionID string `form:"name=transaction_id"`
    
}

type ConfirmCarbonOffset3Request struct {
    ServerURL *string 
    Request *ConfirmCarbonOffset3RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type ConfirmCarbonOffset3Response struct {
    ContentType string 
    StatusCode int64 
    
}

