package operations

import (
"openapi/pkg/models/shared")

type TeamsUpdateDiscussionInOrgPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
    
}

type TeamsUpdateDiscussionInOrgRequestBody struct {
    Body *string `json:"body,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type TeamsUpdateDiscussionInOrgRequest struct {
    PathParams TeamsUpdateDiscussionInOrgPathParams 
    Request *TeamsUpdateDiscussionInOrgRequestBody `request:"mediaType=application/json"`
    
}

type TeamsUpdateDiscussionInOrgResponse struct {
    ContentType string 
    StatusCode int64 
    TeamDiscussion *shared.TeamDiscussion 
    
}

