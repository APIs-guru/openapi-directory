package operations

import (
"openapi/pkg/models/shared")

type GetFunctionConfigurationPathParams struct {
    FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
    
}

type GetFunctionConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetFunctionConfigurationRequest struct {
    PathParams GetFunctionConfigurationPathParams 
    Headers GetFunctionConfigurationHeaders 
    
}

type GetFunctionConfigurationResponse struct {
    ContentType string 
    FunctionConfiguration *shared.FunctionConfiguration 
    ResourceNotFoundException *shared.ResourceNotFoundException 
    ServiceException *shared.ServiceException 
    StatusCode int64 
    
}

