package operations

import (
"openapi/pkg/models/shared")

type TeamsListForAuthenticatedUserQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type TeamsListForAuthenticatedUserRequest struct {
    QueryParams TeamsListForAuthenticatedUserQueryParams 
    
}

type TeamsListForAuthenticatedUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    TeamFulls []shared.TeamFull 
    
}

