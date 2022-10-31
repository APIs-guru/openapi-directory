package operations

import (
"openapi/pkg/models/shared")

type ListVersionsByFunctionPathParams struct {
    FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
    
}

type ListVersionsByFunctionQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    
}

type ListVersionsByFunctionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListVersionsByFunctionRequest struct {
    PathParams ListVersionsByFunctionPathParams 
    QueryParams ListVersionsByFunctionQueryParams 
    Headers ListVersionsByFunctionHeaders 
    
}

type ListVersionsByFunctionResponse struct {
    ContentType string 
    InvalidParameterValueException *interface{} 
    ListVersionsByFunctionResponse *shared.ListVersionsByFunctionResponse 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

