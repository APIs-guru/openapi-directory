package operations

import (
"openapi/pkg/models/shared")

type TeamsUpdateDiscussionPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsUpdateDiscussionRequestBody struct {
    Body *string `json:"body,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type TeamsUpdateDiscussionRequest struct {
    PathParams TeamsUpdateDiscussionPathParams 
    Request *TeamsUpdateDiscussionRequestBody `request:"mediaType=application/json"`
    
}

type TeamsUpdateDiscussionResponse struct {
    ContentType string 
    StatusCode int64 
    TeamDiscussion *shared.TeamDiscussion 
    
}

