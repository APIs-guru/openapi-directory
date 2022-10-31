package operations

import (
"openapi/pkg/models/shared")

type DeleteEventSourceMappingPathParams struct {
    UUID string `pathParam:"style=simple,explode=false,name=UUID"`
    
}

type DeleteEventSourceMappingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteEventSourceMappingRequest struct {
    PathParams DeleteEventSourceMappingPathParams 
    Headers DeleteEventSourceMappingHeaders 
    
}

type DeleteEventSourceMappingResponse struct {
    ContentType string 
    EventSourceMappingConfiguration *shared.EventSourceMappingConfiguration 
    InvalidParameterValueException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

