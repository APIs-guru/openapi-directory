package operations

import (
"time"
"openapi/pkg/models/shared")

type GistsListStarredQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Since *time.Time `queryParam:"style=form,explode=true,name=since"`
    
}

type GistsListStarredRequest struct {
    QueryParams GistsListStarredQueryParams 
    
}

type GistsListStarredResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BaseGists []shared.BaseGist 
    BasicError *shared.BasicError 
    
}

