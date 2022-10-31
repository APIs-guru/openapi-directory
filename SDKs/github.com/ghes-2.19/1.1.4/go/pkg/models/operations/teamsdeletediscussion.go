package operations



type TeamsDeleteDiscussionPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsDeleteDiscussionRequest struct {
    PathParams TeamsDeleteDiscussionPathParams 
    
}

type TeamsDeleteDiscussionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

