package operations

import (
"openapi/pkg/models/shared")

type AppPackagePatchPathParams struct {
    AppPkgID string `pathParam:"style=simple,explode=false,name=appPkgId"`
    
}

type AppPackagePatchRequest struct {
    PathParams AppPackagePatchPathParams 
    Request shared.AppPkgInfoModifications `request:"mediaType=application/json"`
    
}

type AppPackagePatchResponse struct {
    AppPkgInfoModifications *shared.AppPkgInfoModifications 
    ContentType string 
    ProblemDetails *shared.ProblemDetails 
    StatusCode int64 
    
}

