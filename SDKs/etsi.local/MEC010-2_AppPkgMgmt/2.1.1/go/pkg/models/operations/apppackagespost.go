package operations

import (
"openapi/pkg/models/shared")

type AppPackagesPostRequest struct {
    Request shared.CreateAppPkg `request:"mediaType=application/json"`
    
}

type AppPackagesPostResponse struct {
    AppPkgInfos []shared.AppPkgInfo 
    ContentType string 
    ProblemDetails *shared.ProblemDetails 
    StatusCode int64 
    
}

