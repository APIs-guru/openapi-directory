package operations



type PostFollowRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostFollowResponse struct {
    ContentType string 
    StatusCode int64 
    
}

