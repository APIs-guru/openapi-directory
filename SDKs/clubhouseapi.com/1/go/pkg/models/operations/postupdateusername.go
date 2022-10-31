package operations



type PostUpdateUsernameRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostUpdateUsernameResponse struct {
    ContentType string 
    StatusCode int64 
    
}

