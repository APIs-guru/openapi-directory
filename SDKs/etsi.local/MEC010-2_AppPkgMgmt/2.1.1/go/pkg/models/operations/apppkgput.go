package operations

import (
"openapi/pkg/models/shared")

type AppPkgPutPathParams struct {
    AppPkgID string `pathParam:"style=simple,explode=false,name=appPkgId"`
    
}

type AppPkgPutRequest struct {
    PathParams AppPkgPutPathParams 
    Request []byte `request:"mediaType=application/zip"`
    
}

type AppPkgPutResponse struct {
    ContentType string 
    ProblemDetails *shared.ProblemDetails 
    StatusCode int64 
    
}

