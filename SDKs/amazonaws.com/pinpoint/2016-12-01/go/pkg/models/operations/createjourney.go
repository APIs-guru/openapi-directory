package operations

import (
	"openapi/pkg/models/shared"
)

type CreateJourneyPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type CreateJourneyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateJourneyRequestBodyWriteJourneyRequest struct {
	Activities             map[string]shared.Activity `json:"Activities"`
	CreationDate           *string                    `json:"CreationDate"`
	LastModifiedDate       *string                    `json:"LastModifiedDate"`
	Limits                 *shared.JourneyLimits      `json:"Limits"`
	LocalTime              *bool                      `json:"LocalTime"`
	Name                   *string                    `json:"Name"`
	QuietTime              *shared.QuietTime          `json:"QuietTime"`
	RefreshFrequency       *string                    `json:"RefreshFrequency"`
	RefreshOnSegmentUpdate *bool                      `json:"RefreshOnSegmentUpdate"`
	Schedule               *shared.JourneySchedule    `json:"Schedule"`
	StartActivity          *string                    `json:"StartActivity"`
	StartCondition         *shared.StartCondition     `json:"StartCondition"`
	State                  *shared.StateEnum          `json:"State"`
	WaitForQuietTime       *bool                      `json:"WaitForQuietTime"`
}

type CreateJourneyRequestBody struct {
	WriteJourneyRequest CreateJourneyRequestBodyWriteJourneyRequest `json:"WriteJourneyRequest"`
}

type CreateJourneyRequest struct {
	PathParams CreateJourneyPathParams
	Headers    CreateJourneyHeaders
	Request    CreateJourneyRequestBody `request:"mediaType=application/json"`
}

type CreateJourneyResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	CreateJourneyResponse        *shared.CreateJourneyResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
