package operations

import (
"openapi/pkg/models/shared")

type GetTimelineEventQueryParams struct {
    EventID string `queryParam:"style=form,explode=true,name=eventId"`
    IncidentRecordArn string `queryParam:"style=form,explode=true,name=incidentRecordArn"`
    
}

type GetTimelineEventHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetTimelineEventRequest struct {
    QueryParams GetTimelineEventQueryParams 
    Headers GetTimelineEventHeaders 
    
}

type GetTimelineEventResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetTimelineEventOutput *shared.GetTimelineEventOutput 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

