package operations

import (
"openapi/pkg/models/shared")

type ListCodeSigningConfigsQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    
}

type ListCodeSigningConfigsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListCodeSigningConfigsRequest struct {
    QueryParams ListCodeSigningConfigsQueryParams 
    Headers ListCodeSigningConfigsHeaders 
    
}

type ListCodeSigningConfigsResponse struct {
    ContentType string 
    InvalidParameterValueException *interface{} 
    ListCodeSigningConfigsResponse *shared.ListCodeSigningConfigsResponse 
    ServiceException *interface{} 
    StatusCode int64 
    
}

