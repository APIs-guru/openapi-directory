package operations

import (
	"time"
)

type UpdateTimelineEventHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateTimelineEventRequestBody struct {
	ClientToken       *string    `json:"clientToken,omitempty"`
	EventData         *string    `json:"eventData,omitempty"`
	EventID           string     `json:"eventId"`
	EventTime         *time.Time `json:"eventTime,omitempty"`
	EventType         *string    `json:"eventType,omitempty"`
	IncidentRecordArn string     `json:"incidentRecordArn"`
}

type UpdateTimelineEventRequest struct {
	Headers UpdateTimelineEventHeaders
	Request UpdateTimelineEventRequestBody `request:"mediaType=application/json"`
}

type UpdateTimelineEventResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateTimelineEventOutput map[string]interface{}
	ValidationException       *interface{}
}
