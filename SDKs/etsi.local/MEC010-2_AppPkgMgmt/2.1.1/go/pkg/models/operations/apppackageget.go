package operations

import (
"openapi/pkg/models/shared")

type AppPackageGetPathParams struct {
    AppPkgID string `pathParam:"style=simple,explode=false,name=appPkgId"`
    
}

type AppPackageGetRequest struct {
    PathParams AppPackageGetPathParams 
    
}

type AppPackageGetResponse struct {
    AppPkgInfo *shared.AppPkgInfo 
    ContentType string 
    ProblemDetails *shared.ProblemDetails 
    StatusCode int64 
    
}

