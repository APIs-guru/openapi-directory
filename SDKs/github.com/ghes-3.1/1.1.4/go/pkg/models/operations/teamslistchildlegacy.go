package operations

import (
"openapi/pkg/models/shared")

type TeamsListChildLegacyPathParams struct {
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsListChildLegacyQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type TeamsListChildLegacyRequest struct {
    PathParams TeamsListChildLegacyPathParams 
    QueryParams TeamsListChildLegacyQueryParams 
    
}

type TeamsListChildLegacyResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Teams []shared.Team 
    ValidationError *shared.ValidationError 
    
}

