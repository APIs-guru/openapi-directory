package operations



type TeamsDeleteDiscussionInOrgPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
    
}

type TeamsDeleteDiscussionInOrgRequest struct {
    PathParams TeamsDeleteDiscussionInOrgPathParams 
    
}

type TeamsDeleteDiscussionInOrgResponse struct {
    ContentType string 
    StatusCode int64 
    
}

