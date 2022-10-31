package operations

import (
"openapi/pkg/models/shared")

type TeamsListPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type TeamsListQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type TeamsListRequest struct {
    PathParams TeamsListPathParams 
    QueryParams TeamsListQueryParams 
    
}

type TeamsListResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Teams []shared.Team 
    
}

