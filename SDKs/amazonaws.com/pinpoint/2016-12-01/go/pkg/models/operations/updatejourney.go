package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateJourneyPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	JourneyID     string `pathParam:"style=simple,explode=false,name=journey-id"`
}

type UpdateJourneyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateJourneyRequestBodyWriteJourneyRequest struct {
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

type UpdateJourneyRequestBody struct {
	WriteJourneyRequest UpdateJourneyRequestBodyWriteJourneyRequest `json:"WriteJourneyRequest"`
}

type UpdateJourneyRequest struct {
	PathParams UpdateJourneyPathParams
	Headers    UpdateJourneyHeaders
	Request    UpdateJourneyRequestBody `request:"mediaType=application/json"`
}

type UpdateJourneyResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateJourneyResponse        *shared.UpdateJourneyResponse
}
