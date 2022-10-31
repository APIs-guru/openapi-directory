package operations

import (
"openapi/pkg/models/shared")

type GetFunctionPathParams struct {
    FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
    
}

type GetFunctionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetFunctionRequest struct {
    PathParams GetFunctionPathParams 
    Headers GetFunctionHeaders 
    
}

type GetFunctionResponse struct {
    ContentType string 
    GetFunctionResponse *shared.GetFunctionResponse 
    ResourceNotFoundException *shared.ResourceNotFoundException 
    ServiceException *shared.ServiceException 
    StatusCode int64 
    
}

