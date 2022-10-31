package operations

import (
"openapi/pkg/models/shared")

type TeamsListDiscussionsLegacyPathParams struct {
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsListDiscussionsLegacyQueryParams struct {
    Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type TeamsListDiscussionsLegacyRequest struct {
    PathParams TeamsListDiscussionsLegacyPathParams 
    QueryParams TeamsListDiscussionsLegacyQueryParams 
    
}

type TeamsListDiscussionsLegacyResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    TeamDiscussions []shared.TeamDiscussion 
    
}

