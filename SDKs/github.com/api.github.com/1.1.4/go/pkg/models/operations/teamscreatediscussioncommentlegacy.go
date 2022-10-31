package operations

import (
"openapi/pkg/models/shared")

type TeamsCreateDiscussionCommentLegacyPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsCreateDiscussionCommentLegacyRequestBody struct {
    Body string `json:"body"`
    
}

type TeamsCreateDiscussionCommentLegacyRequest struct {
    PathParams TeamsCreateDiscussionCommentLegacyPathParams 
    Request *TeamsCreateDiscussionCommentLegacyRequestBody `request:"mediaType=application/json"`
    
}

type TeamsCreateDiscussionCommentLegacyResponse struct {
    ContentType string 
    StatusCode int64 
    TeamDiscussionComment *shared.TeamDiscussionComment 
    
}

