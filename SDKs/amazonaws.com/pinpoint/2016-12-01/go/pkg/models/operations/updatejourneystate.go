package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateJourneyStatePathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	JourneyID     string `pathParam:"style=simple,explode=false,name=journey-id"`
}

type UpdateJourneyStateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateJourneyStateRequestBodyJourneyStateRequest struct {
	State *shared.StateEnum `json:"State"`
}

type UpdateJourneyStateRequestBody struct {
	JourneyStateRequest UpdateJourneyStateRequestBodyJourneyStateRequest `json:"JourneyStateRequest"`
}

type UpdateJourneyStateRequest struct {
	PathParams UpdateJourneyStatePathParams
	Headers    UpdateJourneyStateHeaders
	Request    UpdateJourneyStateRequestBody `request:"mediaType=application/json"`
}

type UpdateJourneyStateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateJourneyStateResponse   *shared.UpdateJourneyStateResponse
}
