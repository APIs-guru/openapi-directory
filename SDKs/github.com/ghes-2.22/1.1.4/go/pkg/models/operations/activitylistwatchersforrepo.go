package operations

import (
"openapi/pkg/models/shared")

type ActivityListWatchersForRepoPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ActivityListWatchersForRepoQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ActivityListWatchersForRepoRequest struct {
    PathParams ActivityListWatchersForRepoPathParams 
    QueryParams ActivityListWatchersForRepoQueryParams 
    
}

type ActivityListWatchersForRepoResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    SimpleUsers []shared.SimpleUser 
    
}

