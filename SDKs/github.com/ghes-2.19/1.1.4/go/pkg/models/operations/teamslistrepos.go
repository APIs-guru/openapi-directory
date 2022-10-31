package operations

import (
"openapi/pkg/models/shared")

type TeamsListReposPathParams struct {
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsListReposQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type TeamsListReposRequest struct {
    PathParams TeamsListReposPathParams 
    QueryParams TeamsListReposQueryParams 
    
}

type TeamsListReposResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    MinimalRepositories []shared.MinimalRepository 
    
}

