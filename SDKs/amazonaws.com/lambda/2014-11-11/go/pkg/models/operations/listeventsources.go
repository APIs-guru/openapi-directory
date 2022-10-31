package operations

import (
"openapi/pkg/models/shared")

type ListEventSourcesQueryParams struct {
    EventSource *string `queryParam:"style=form,explode=true,name=EventSource"`
    FunctionName *string `queryParam:"style=form,explode=true,name=FunctionName"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    
}

type ListEventSourcesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListEventSourcesRequest struct {
    QueryParams ListEventSourcesQueryParams 
    Headers ListEventSourcesHeaders 
    
}

type ListEventSourcesResponse struct {
    ContentType string 
    InvalidParameterValueException *shared.InvalidParameterValueException 
    ListEventSourcesResponse *shared.ListEventSourcesResponse 
    ResourceNotFoundException *shared.ResourceNotFoundException 
    ServiceException *shared.ServiceException 
    StatusCode int64 
    
}

