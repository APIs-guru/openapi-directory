package operations

import (
"openapi/pkg/models/shared")

type GetIntentPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type GetIntentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetIntentRequest struct {
    PathParams GetIntentPathParams 
    Headers GetIntentHeaders 
    
}

type GetIntentResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetIntentResponse *shared.GetIntentResponse 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

