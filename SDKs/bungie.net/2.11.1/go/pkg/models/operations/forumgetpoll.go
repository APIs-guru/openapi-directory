package operations



type ForumGetPollPathParams struct {
    TopicID int64 `pathParam:"style=simple,explode=false,name=topicId"`
    
}

type ForumGetPollRequest struct {
    PathParams ForumGetPollPathParams 
    
}

type ForumGetPollResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

