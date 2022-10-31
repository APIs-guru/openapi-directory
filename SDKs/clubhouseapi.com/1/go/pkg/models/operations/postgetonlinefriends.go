package operations



type PostGetOnlineFriendsRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostGetOnlineFriendsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

