package operations



type ConnectRequestBody struct {
    Endpoint string `json:"endpoint"`
    
}

type ConnectRequest struct {
    Request *ConnectRequestBody `request:"mediaType=application/json"`
    
}

type ConnectResponse struct {
    ContentType string 
    StatusCode int64 
    Connect200ApplicationJSONString *string 
    
}

