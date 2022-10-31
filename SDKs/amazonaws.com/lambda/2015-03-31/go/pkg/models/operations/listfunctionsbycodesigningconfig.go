package operations

import (
"openapi/pkg/models/shared")

type ListFunctionsByCodeSigningConfigPathParams struct {
    CodeSigningConfigArn string `pathParam:"style=simple,explode=false,name=CodeSigningConfigArn"`
    
}

type ListFunctionsByCodeSigningConfigQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    
}

type ListFunctionsByCodeSigningConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListFunctionsByCodeSigningConfigRequest struct {
    PathParams ListFunctionsByCodeSigningConfigPathParams 
    QueryParams ListFunctionsByCodeSigningConfigQueryParams 
    Headers ListFunctionsByCodeSigningConfigHeaders 
    
}

type ListFunctionsByCodeSigningConfigResponse struct {
    ContentType string 
    InvalidParameterValueException *interface{} 
    ListFunctionsByCodeSigningConfigResponse *shared.ListFunctionsByCodeSigningConfigResponse 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    
}

