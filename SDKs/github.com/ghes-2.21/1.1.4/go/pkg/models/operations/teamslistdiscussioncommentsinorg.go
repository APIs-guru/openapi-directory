package operations

import (
"openapi/pkg/models/shared")

type TeamsListDiscussionCommentsInOrgPathParams struct {
    DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
    
}

type TeamsListDiscussionCommentsInOrgQueryParams struct {
    Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type TeamsListDiscussionCommentsInOrgRequest struct {
    PathParams TeamsListDiscussionCommentsInOrgPathParams 
    QueryParams TeamsListDiscussionCommentsInOrgQueryParams 
    
}

type TeamsListDiscussionCommentsInOrgResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    TeamDiscussionComments []shared.TeamDiscussionComment 
    
}

