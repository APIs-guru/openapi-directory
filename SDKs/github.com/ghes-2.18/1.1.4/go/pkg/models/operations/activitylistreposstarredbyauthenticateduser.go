package operations

import (
"openapi/pkg/models/shared")

type ActivityListReposStarredByAuthenticatedUserQueryParams struct {
    Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *shared.SortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type ActivityListReposStarredByAuthenticatedUserRequest struct {
    QueryParams ActivityListReposStarredByAuthenticatedUserQueryParams 
    
}

type ActivityListReposStarredByAuthenticatedUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Repositories []shared.Repository 
    StarredRepositories []shared.StarredRepository 
    
}

