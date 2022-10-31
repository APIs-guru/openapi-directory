package operations



type PostGetFollowingRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostGetFollowingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

