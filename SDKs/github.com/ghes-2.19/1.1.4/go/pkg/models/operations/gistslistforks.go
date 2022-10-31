package operations

import (
"openapi/pkg/models/shared")

type GistsListForksPathParams struct {
    GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
    
}

type GistsListForksQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GistsListForksRequest struct {
    PathParams GistsListForksPathParams 
    QueryParams GistsListForksQueryParams 
    
}

type GistsListForksResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    GistSimples []shared.GistSimple 
    
}

