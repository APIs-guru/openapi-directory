package operations

import (
"openapi/pkg/models/shared")

type TeamsGetDiscussionPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsGetDiscussionRequest struct {
    PathParams TeamsGetDiscussionPathParams 
    
}

type TeamsGetDiscussionResponse struct {
    ContentType string 
    StatusCode int64 
    TeamDiscussion *shared.TeamDiscussion 
    
}

