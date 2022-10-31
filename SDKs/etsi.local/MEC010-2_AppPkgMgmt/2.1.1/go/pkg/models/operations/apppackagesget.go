package operations

import (
"openapi/pkg/models/shared")

type AppPackagesGetQueryParams struct {
    AllFields *string `queryParam:"style=form,explode=true,name=all_fields"`
    ExcludeDefault *string `queryParam:"style=form,explode=true,name=exclude_default"`
    ExcludeFields *string `queryParam:"style=form,explode=true,name=exclude_fields"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    
}

type AppPackagesGetRequest struct {
    QueryParams AppPackagesGetQueryParams 
    
}

type AppPackagesGetResponse struct {
    AppPkgInfos []shared.AppPkgInfo 
    ContentType string 
    ProblemDetails *shared.ProblemDetails 
    StatusCode int64 
    
}

