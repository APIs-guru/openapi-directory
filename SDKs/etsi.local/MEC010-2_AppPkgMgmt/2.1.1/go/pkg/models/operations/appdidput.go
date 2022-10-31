package operations

import (
"openapi/pkg/models/shared")

type AppDIDPutPathParams struct {
    AppDID string `pathParam:"style=simple,explode=false,name=appDId"`
    
}

type AppDIDPutRequest struct {
    PathParams AppDIDPutPathParams 
    Request []byte `request:"mediaType=application/zip"`
    
}

type AppDIDPutResponse struct {
    ContentType string 
    ProblemDetails *shared.ProblemDetails 
    StatusCode int64 
    
}

