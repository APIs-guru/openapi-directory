package operations



type PostSearchUsersRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostSearchUsersResponse struct {
    ContentType string 
    StatusCode int64 
    
}

