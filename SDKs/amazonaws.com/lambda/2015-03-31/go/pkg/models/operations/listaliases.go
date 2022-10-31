package operations

import (
"openapi/pkg/models/shared")

type ListAliasesPathParams struct {
    FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
    
}

type ListAliasesQueryParams struct {
    FunctionVersion *string `queryParam:"style=form,explode=true,name=FunctionVersion"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    
}

type ListAliasesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListAliasesRequest struct {
    PathParams ListAliasesPathParams 
    QueryParams ListAliasesQueryParams 
    Headers ListAliasesHeaders 
    
}

type ListAliasesResponse struct {
    ContentType string 
    InvalidParameterValueException *interface{} 
    ListAliasesResponse *shared.ListAliasesResponse 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

