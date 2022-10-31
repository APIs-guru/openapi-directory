package operations



type PostGetSuggestedFollowsSimilarRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostGetSuggestedFollowsSimilarResponse struct {
    ContentType string 
    StatusCode int64 
    
}

