package operations



type SetLogRequest struct {
    Request string `request:"mediaType=application/json"`
    
}

type SetLogResponse struct {
    ContentType string 
    StatusCode int64 
    SetLog200ApplicationJSONString *string 
    
}

