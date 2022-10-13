package operations

import (
	"openapi/pkg/models/shared"
)

type GetTimelineEventQueryParams struct {
	EventID           string `queryParam:"style=form,explode=true,name=eventId"`
	IncidentRecordArn string `queryParam:"style=form,explode=true,name=incidentRecordArn"`
}

type GetTimelineEventHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetTimelineEventRequest struct {
	QueryParams GetTimelineEventQueryParams
	Headers     GetTimelineEventHeaders
}

type GetTimelineEventResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetTimelineEventOutput    *shared.GetTimelineEventOutput
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
