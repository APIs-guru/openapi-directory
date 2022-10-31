package operations

import (
"time"
"openapi/pkg/models/shared")

type PostMessagesQueryParams struct {
    AutoUnicode *bool `queryParam:"style=form,explode=true,name=auto-unicode"`
    DeduplicationID *int32 `queryParam:"style=form,explode=true,name=deduplication-id"`
    ScheduleDate *time.Time `queryParam:"style=form,explode=true,name=schedule-date"`
    ScheduleDescription *string `queryParam:"style=form,explode=true,name=schedule-description"`
    
}

type PostMessagesSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostMessagesRequest struct {
    QueryParams PostMessagesQueryParams 
    Request []shared.SubmissionEntry `request:"mediaType=application/json"`
    Security PostMessagesSecurity 
    
}

type PostMessagesResponse struct {
    ContentType string 
    Error *shared.Error 
    Messages []shared.Message 
    StatusCode int64 
    
}

