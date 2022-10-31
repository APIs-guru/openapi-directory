package operations

import (
"openapi/pkg/models/shared")

type ListFunctionEventInvokeConfigsPathParams struct {
    FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
    
}

type ListFunctionEventInvokeConfigsQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    
}

type ListFunctionEventInvokeConfigsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListFunctionEventInvokeConfigsRequest struct {
    PathParams ListFunctionEventInvokeConfigsPathParams 
    QueryParams ListFunctionEventInvokeConfigsQueryParams 
    Headers ListFunctionEventInvokeConfigsHeaders 
    
}

type ListFunctionEventInvokeConfigsResponse struct {
    ContentType string 
    InvalidParameterValueException *interface{} 
    ListFunctionEventInvokeConfigsResponse *shared.ListFunctionEventInvokeConfigsResponse 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

