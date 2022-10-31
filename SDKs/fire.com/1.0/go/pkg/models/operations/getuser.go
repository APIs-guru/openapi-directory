package operations

import (
"openapi/pkg/models/shared")

type GetUserPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetUserRequest struct {
    PathParams GetUserPathParams 
    
}

type GetUserResponse struct {
    ContentType string 
    StatusCode int64 
    OneusersGetResponses200ContentApplication1jsonSchemaItems *shared.OneusersGetResponses200ContentApplication1jsonSchemaItems 
    
}

