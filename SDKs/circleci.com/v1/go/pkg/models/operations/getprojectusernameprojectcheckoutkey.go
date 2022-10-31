package operations

import (
"openapi/pkg/models/shared")

type GetProjectUsernameProjectCheckoutKeyPathParams struct {
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type GetProjectUsernameProjectCheckoutKeyRequest struct {
    PathParams GetProjectUsernameProjectCheckoutKeyPathParams 
    
}

type GetProjectUsernameProjectCheckoutKeyResponse struct {
    ContentType string 
    Keys []shared.Key 
    StatusCode int64 
    
}

