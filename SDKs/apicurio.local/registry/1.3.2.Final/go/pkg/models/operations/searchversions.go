package operations

import (
"openapi/pkg/models/shared")

type SearchVersionsPathParams struct {
    ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
    
}

type SearchVersionsQueryParams struct {
    Limit int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset int64 `queryParam:"style=form,explode=true,name=offset"`
    
}

type SearchVersionsRequest struct {
    PathParams SearchVersionsPathParams 
    QueryParams SearchVersionsQueryParams 
    
}

type SearchVersionsResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    VersionSearchResults *shared.VersionSearchResults 
    
}

