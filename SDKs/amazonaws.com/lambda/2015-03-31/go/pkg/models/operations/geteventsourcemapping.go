package operations

import (
"openapi/pkg/models/shared")

type GetEventSourceMappingPathParams struct {
    UUID string `pathParam:"style=simple,explode=false,name=UUID"`
    
}

type GetEventSourceMappingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetEventSourceMappingRequest struct {
    PathParams GetEventSourceMappingPathParams 
    Headers GetEventSourceMappingHeaders 
    
}

type GetEventSourceMappingResponse struct {
    ContentType string 
    EventSourceMappingConfiguration *shared.EventSourceMappingConfiguration 
    InvalidParameterValueException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

