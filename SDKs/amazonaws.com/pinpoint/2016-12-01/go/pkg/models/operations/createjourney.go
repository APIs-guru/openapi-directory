package operations

import (
	"openapi/pkg/models/shared"
)

type CreateJourneyPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type CreateJourneyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateJourneyRequestBodyWriteJourneyRequest
// Specifies the configuration and other settings for a journey.
type CreateJourneyRequestBodyWriteJourneyRequest struct {
	Activities             map[string]shared.Activity `json:"Activities,omitempty"`
	CreationDate           *string                    `json:"CreationDate,omitempty"`
	LastModifiedDate       *string                    `json:"LastModifiedDate,omitempty"`
	Limits                 *shared.JourneyLimits      `json:"Limits,omitempty"`
	LocalTime              *bool                      `json:"LocalTime,omitempty"`
	Name                   *string                    `json:"Name,omitempty"`
	QuietTime              *shared.QuietTime          `json:"QuietTime,omitempty"`
	RefreshFrequency       *string                    `json:"RefreshFrequency,omitempty"`
	RefreshOnSegmentUpdate *bool                      `json:"RefreshOnSegmentUpdate,omitempty"`
	Schedule               *shared.JourneySchedule    `json:"Schedule,omitempty"`
	StartActivity          *string                    `json:"StartActivity,omitempty"`
	StartCondition         *shared.StartCondition     `json:"StartCondition,omitempty"`
	State                  *shared.StateEnum          `json:"State,omitempty"`
	WaitForQuietTime       *bool                      `json:"WaitForQuietTime,omitempty"`
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
