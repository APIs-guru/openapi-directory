package operations

import (
"openapi/pkg/models/shared")

type GetEventSourcePathParams struct {
    UUID string `pathParam:"style=simple,explode=false,name=UUID"`
    
}

type GetEventSourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetEventSourceRequest struct {
    PathParams GetEventSourcePathParams 
    Headers GetEventSourceHeaders 
    
}

type GetEventSourceResponse struct {
    ContentType string 
    EventSourceConfiguration *shared.EventSourceConfiguration 
    InvalidParameterValueException *shared.InvalidParameterValueException 
    ResourceNotFoundException *shared.ResourceNotFoundException 
    ServiceException *shared.ServiceException 
    StatusCode int64 
    
}

