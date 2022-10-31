package operations

import (
"openapi/pkg/models/shared")

type TeamsCreateDiscussionCommentInOrgPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
    
}

type TeamsCreateDiscussionCommentInOrgRequestBody struct {
    Body string `json:"body"`
    
}

type TeamsCreateDiscussionCommentInOrgRequest struct {
    PathParams TeamsCreateDiscussionCommentInOrgPathParams 
    Request *TeamsCreateDiscussionCommentInOrgRequestBody `request:"mediaType=application/json"`
    
}

type TeamsCreateDiscussionCommentInOrgResponse struct {
    ContentType string 
    StatusCode int64 
    TeamDiscussionComment *shared.TeamDiscussionComment 
    
}

