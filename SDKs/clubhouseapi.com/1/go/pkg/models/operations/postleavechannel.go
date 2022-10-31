package operations



type PostLeaveChannelRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostLeaveChannelResponse struct {
    ContentType string 
    StatusCode int64 
    
}

