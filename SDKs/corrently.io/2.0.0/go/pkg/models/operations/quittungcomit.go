package operations



type QuittungComitRequestBody struct {
    Account *string `json:"account,omitempty"`
    
}

type QuittungComitRequest struct {
    Request *QuittungComitRequestBody `request:"mediaType=application/json"`
    
}

type QuittungComitResponse struct {
    ContentType string 
    StatusCode int64 
    QuittungComit200ApplicationJSONString *string 
    
}

