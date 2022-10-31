package operations



type DeleteTimelineEventHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteTimelineEventRequestBody struct {
    EventID string `json:"eventId"`
    IncidentRecordArn string `json:"incidentRecordArn"`
    
}

type DeleteTimelineEventRequest struct {
    Headers DeleteTimelineEventHeaders 
    Request DeleteTimelineEventRequestBody `request:"mediaType=application/json"`
    
}

type DeleteTimelineEventResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DeleteTimelineEventOutput map[string]interface{} 
    InternalServerException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

