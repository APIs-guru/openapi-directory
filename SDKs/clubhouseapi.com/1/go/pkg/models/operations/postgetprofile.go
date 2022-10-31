package operations



type PostGetProfileRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostGetProfileResponse struct {
    ContentType string 
    StatusCode int64 
    
}

