package operations

import (
"openapi/pkg/models/shared")

type AppDIDGetPathParams struct {
    AppDID string `pathParam:"style=simple,explode=false,name=appDId"`
    
}

type AppDIDGetRequest struct {
    PathParams AppDIDGetPathParams 
    
}

type AppDIDGetResponse struct {
    ContentType string 
    ProblemDetails *shared.ProblemDetails 
    StatusCode int64 
    
}

