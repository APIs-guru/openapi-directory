package operations

import (
"openapi/pkg/models/shared")

type TeamsListChildInOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
    
}

type TeamsListChildInOrgQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type TeamsListChildInOrgRequest struct {
    PathParams TeamsListChildInOrgPathParams 
    QueryParams TeamsListChildInOrgQueryParams 
    
}

type TeamsListChildInOrgResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Teams []shared.Team 
    
}

