package operations



type RemotestopRequestBody struct {
    Chargestation *string `json:"chargestation,omitempty"`
    Driver *string `json:"driver,omitempty"`
    Transaction *string `json:"transaction,omitempty"`
    
}

type RemotestopRequest struct {
    Request RemotestopRequestBody `request:"mediaType=application/json"`
    
}

type RemotestopResponse struct {
    ContentType string 
    StatusCode int64 
    
}

