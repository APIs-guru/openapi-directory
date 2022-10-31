package operations

import (
"openapi/pkg/models/shared")

type AddEventSourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type AddEventSourceRequestBody struct {
    BatchSize *int64 `json:"BatchSize,omitempty"`
    EventSource string `json:"EventSource"`
    FunctionName string `json:"FunctionName"`
    Parameters map[string]string `json:"Parameters,omitempty"`
    Role string `json:"Role"`
    
}

type AddEventSourceRequest struct {
    Headers AddEventSourceHeaders 
    Request AddEventSourceRequestBody `request:"mediaType=application/json"`
    
}

type AddEventSourceResponse struct {
    ContentType string 
    EventSourceConfiguration *shared.EventSourceConfiguration 
    InvalidParameterValueException *shared.InvalidParameterValueException 
    ServiceException *shared.ServiceException 
    StatusCode int64 
    
}

