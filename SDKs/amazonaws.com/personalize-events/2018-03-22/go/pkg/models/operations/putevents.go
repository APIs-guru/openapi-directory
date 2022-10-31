package operations

import (
	"openapi/pkg/models/shared"
)

type PutEventsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutEventsRequestBody struct {
	EventList  []shared.Event `json:"eventList"`
	SessionID  string         `json:"sessionId"`
	TrackingID string         `json:"trackingId"`
	UserID     *string        `json:"userId,omitempty"`
}

type PutEventsRequest struct {
	Headers PutEventsHeaders
	Request PutEventsRequestBody `request:"mediaType=application/json"`
}

type PutEventsResponse struct {
	ContentType           string
	InvalidInputException *interface{}
	StatusCode            int64
}
