package operations

import (
	"openapi/pkg/models/shared"
)

type PutEventsPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type PutEventsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutEventsRequestBodyEventsRequest struct {
	BatchItem map[string]shared.EventsBatch `json:"BatchItem,omitempty"`
}

type PutEventsRequestBody struct {
	EventsRequest PutEventsRequestBodyEventsRequest `json:"EventsRequest"`
}

type PutEventsRequest struct {
	PathParams PutEventsPathParams
	Headers    PutEventsHeaders
	Request    PutEventsRequestBody `request:"mediaType=application/json"`
}

type PutEventsResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	PutEventsResponse            *shared.PutEventsResponse
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
