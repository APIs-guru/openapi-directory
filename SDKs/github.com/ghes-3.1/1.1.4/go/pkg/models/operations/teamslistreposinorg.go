package operations

import (
"openapi/pkg/models/shared")

type TeamsListReposInOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
    
}

type TeamsListReposInOrgQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type TeamsListReposInOrgRequest struct {
    PathParams TeamsListReposInOrgPathParams 
    QueryParams TeamsListReposInOrgQueryParams 
    
}

type TeamsListReposInOrgResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    MinimalRepositories []shared.MinimalRepository 
    
}

