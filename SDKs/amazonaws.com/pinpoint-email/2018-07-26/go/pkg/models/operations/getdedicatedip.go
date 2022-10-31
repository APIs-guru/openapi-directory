package operations

import (
"openapi/pkg/models/shared")

type GetDedicatedIPPathParams struct {
    IP string `pathParam:"style=simple,explode=false,name=IP"`
    
}

type GetDedicatedIPHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDedicatedIPRequest struct {
    PathParams GetDedicatedIPPathParams 
    Headers GetDedicatedIPHeaders 
    
}

type GetDedicatedIPResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetDedicatedIPResponse *shared.GetDedicatedIPResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

