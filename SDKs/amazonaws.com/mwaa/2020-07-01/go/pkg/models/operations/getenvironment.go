package operations

import (
"openapi/pkg/models/shared")

type GetEnvironmentPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=Name"`
    
}

type GetEnvironmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetEnvironmentRequest struct {
    PathParams GetEnvironmentPathParams 
    Headers GetEnvironmentHeaders 
    
}

type GetEnvironmentResponse struct {
    ContentType string 
    GetEnvironmentOutput *shared.GetEnvironmentOutput 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

