package operations

import (
"openapi/pkg/models/shared")

type ListDeviceResourcesPathParams struct {
    ManagedDeviceID string `pathParam:"style=simple,explode=false,name=managedDeviceId"`
    
}

type ListDeviceResourcesQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    
}

type ListDeviceResourcesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListDeviceResourcesRequest struct {
    PathParams ListDeviceResourcesPathParams 
    QueryParams ListDeviceResourcesQueryParams 
    Headers ListDeviceResourcesHeaders 
    
}

type ListDeviceResourcesResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListDeviceResourcesOutput *shared.ListDeviceResourcesOutput 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

