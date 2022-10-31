package operations



type PostGetSuggestedSpeakersRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostGetSuggestedSpeakersResponse struct {
    ContentType string 
    StatusCode int64 
    
}

