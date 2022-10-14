package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateDispatchEventPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposCreateDispatchEventRequestBody struct {
	ClientPayload map[string]interface{} `json:"client_payload,omitempty"`
	EventType     string                 `json:"event_type"`
}

type ReposCreateDispatchEventRequest struct {
	PathParams ReposCreateDispatchEventPathParams
	Request    *ReposCreateDispatchEventRequestBody `request:"mediaType=application/json"`
}

type ReposCreateDispatchEventResponse struct {
	ContentType     string
	StatusCode      int64
	ValidationError *shared.ValidationError
}
