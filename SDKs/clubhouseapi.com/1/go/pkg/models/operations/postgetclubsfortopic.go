package operations



type PostGetClubsForTopicRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostGetClubsForTopicResponse struct {
    ContentType string 
    StatusCode int64 
    
}

