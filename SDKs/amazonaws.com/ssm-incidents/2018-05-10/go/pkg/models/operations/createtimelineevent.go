package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateTimelineEventHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateTimelineEventRequestBody struct {
	ClientToken       *string   `json:"clientToken"`
	EventData         string    `json:"eventData"`
	EventTime         time.Time `json:"eventTime"`
	EventType         string    `json:"eventType"`
	IncidentRecordArn string    `json:"incidentRecordArn"`
}

type CreateTimelineEventRequest struct {
	Headers CreateTimelineEventHeaders
	Request CreateTimelineEventRequestBody `request:"mediaType=application/json"`
}

type CreateTimelineEventResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	CreateTimelineEventOutput *shared.CreateTimelineEventOutput
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
