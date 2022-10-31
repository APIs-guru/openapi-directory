package operations

import (
"openapi/pkg/models/shared")

type GetRecentBuildsQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetRecentBuildsRequest struct {
    QueryParams GetRecentBuildsQueryParams 
    
}

type GetRecentBuildsResponse struct {
    Builds []shared.Build 
    ContentType string 
    StatusCode int64 
    
}

