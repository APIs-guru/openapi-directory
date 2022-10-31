package operations

import (
"openapi/pkg/models/shared")

type AppPackageDeletePathParams struct {
    AppPkgID string `pathParam:"style=simple,explode=false,name=appPkgId"`
    
}

type AppPackageDeleteRequest struct {
    PathParams AppPackageDeletePathParams 
    
}

type AppPackageDeleteResponse struct {
    ContentType string 
    ProblemDetails *shared.ProblemDetails 
    StatusCode int64 
    
}

