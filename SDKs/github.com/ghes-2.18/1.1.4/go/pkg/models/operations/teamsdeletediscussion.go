package operations



type TeamsDeleteDiscussionPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsDeleteDiscussionHeaders struct {
    Accept string `header:"style=simple,explode=false,name=accept"`
    
}

type TeamsDeleteDiscussionRequest struct {
    PathParams TeamsDeleteDiscussionPathParams 
    Headers TeamsDeleteDiscussionHeaders 
    
}

type TeamsDeleteDiscussionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

