package operations

import (
"openapi/pkg/models/shared")

type TeamsCreateDiscussionCommentPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsCreateDiscussionCommentHeaders struct {
    Accept string `header:"style=simple,explode=false,name=accept"`
    
}

type TeamsCreateDiscussionCommentRequestBody struct {
    Body string `json:"body"`
    
}

type TeamsCreateDiscussionCommentRequest struct {
    PathParams TeamsCreateDiscussionCommentPathParams 
    Headers TeamsCreateDiscussionCommentHeaders 
    Request *TeamsCreateDiscussionCommentRequestBody `request:"mediaType=application/json"`
    
}

type TeamsCreateDiscussionCommentResponse struct {
    ContentType string 
    StatusCode int64 
    TeamDiscussionComment *shared.TeamDiscussionComment 
    
}

