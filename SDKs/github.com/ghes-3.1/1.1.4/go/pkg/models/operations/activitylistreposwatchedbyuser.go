package operations

import (
"openapi/pkg/models/shared")

type ActivityListReposWatchedByUserPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type ActivityListReposWatchedByUserQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ActivityListReposWatchedByUserRequest struct {
    PathParams ActivityListReposWatchedByUserPathParams 
    QueryParams ActivityListReposWatchedByUserQueryParams 
    
}

type ActivityListReposWatchedByUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    MinimalRepositories []shared.MinimalRepository 
    
}

