package operations

import (
"openapi/pkg/models/shared")

type ActivityListReposStarredByUserPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type ActivityListReposStarredByUserQueryParams struct {
    Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *shared.SortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type ActivityListReposStarredByUserRequest struct {
    PathParams ActivityListReposStarredByUserPathParams 
    QueryParams ActivityListReposStarredByUserQueryParams 
    
}

type ActivityListReposStarredByUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Repositories []shared.Repository 
    StarredRepositories []shared.StarredRepository 
    
}

