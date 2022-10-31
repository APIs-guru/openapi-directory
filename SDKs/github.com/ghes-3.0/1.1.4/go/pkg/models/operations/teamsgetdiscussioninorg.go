package operations

import (
"openapi/pkg/models/shared")

type TeamsGetDiscussionInOrgPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
    
}

type TeamsGetDiscussionInOrgRequest struct {
    PathParams TeamsGetDiscussionInOrgPathParams 
    
}

type TeamsGetDiscussionInOrgResponse struct {
    ContentType string 
    StatusCode int64 
    TeamDiscussion *shared.TeamDiscussion 
    
}

