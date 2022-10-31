package operations

import (
"time"
"openapi/pkg/models/shared")

type CreateTimelineEventHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateTimelineEventRequestBody struct {
    ClientToken *string `json:"clientToken,omitempty"`
    EventData string `json:"eventData"`
    EventTime time.Time `json:"eventTime"`
    EventType string `json:"eventType"`
    IncidentRecordArn string `json:"incidentRecordArn"`
    
}

type CreateTimelineEventRequest struct {
    Headers CreateTimelineEventHeaders 
    Request CreateTimelineEventRequestBody `request:"mediaType=application/json"`
    
}

type CreateTimelineEventResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateTimelineEventOutput *shared.CreateTimelineEventOutput 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

