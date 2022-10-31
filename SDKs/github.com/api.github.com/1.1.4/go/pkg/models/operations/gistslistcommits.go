package operations

import (
"openapi/pkg/models/shared")

type GistsListCommitsPathParams struct {
    GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
    
}

type GistsListCommitsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GistsListCommitsRequest struct {
    PathParams GistsListCommitsPathParams 
    QueryParams GistsListCommitsQueryParams 
    
}

type GistsListCommitsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    GistCommits []shared.GistCommit 
    
}

