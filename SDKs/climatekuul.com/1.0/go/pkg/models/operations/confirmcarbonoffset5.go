package operations


var ConfirmCarbonOffset5Servers = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmCarbonOffset5RequestBody struct {
    CarbonOffset string `form:"name=carbonOffset"`
    ContactEmail *string `form:"name=contactEmail"`
    ContactFirstName *string `form:"name=contactFirstName"`
    ContactLastName *string `form:"name=contactLastName"`
    TransactionID string `form:"name=transaction_id"`
    
}

type ConfirmCarbonOffset5Request struct {
    ServerURL *string 
    Request *ConfirmCarbonOffset5RequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type ConfirmCarbonOffset5Response struct {
    ContentType string 
    StatusCode int64 
    
}

