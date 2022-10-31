package operations



type QuittungCreateRequestBody struct {
    Email *string `json:"email,omitempty"`
    
}

type QuittungCreateRequest struct {
    Request QuittungCreateRequestBody `request:"mediaType=application/json"`
    
}

type QuittungCreateResponse struct {
    ContentType string 
    StatusCode int64 
    QuittungCreate200ApplicationJSONString *string 
    
}

