package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConfigurationSetEventDestinationPathParams struct {
	ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
}

type CreateConfigurationSetEventDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateConfigurationSetEventDestinationRequestBodyEventDestination struct {
	CloudWatchDestination      *shared.CloudWatchDestination      `json:"CloudWatchDestination,omitempty"`
	Enabled                    *bool                              `json:"Enabled,omitempty"`
	KinesisFirehoseDestination *shared.KinesisFirehoseDestination `json:"KinesisFirehoseDestination,omitempty"`
	MatchingEventTypes         []shared.EventTypeEnum             `json:"MatchingEventTypes,omitempty"`
	PinpointDestination        *shared.PinpointDestination        `json:"PinpointDestination,omitempty"`
	SnsDestination             *shared.SnsDestination             `json:"SnsDestination,omitempty"`
}

type CreateConfigurationSetEventDestinationRequestBody struct {
	EventDestination     CreateConfigurationSetEventDestinationRequestBodyEventDestination `json:"EventDestination"`
	EventDestinationName string                                                            `json:"EventDestinationName"`
}

type CreateConfigurationSetEventDestinationRequest struct {
	PathParams CreateConfigurationSetEventDestinationPathParams
	Headers    CreateConfigurationSetEventDestinationHeaders
	Request    CreateConfigurationSetEventDestinationRequestBody `request:"mediaType=application/json"`
}

type CreateConfigurationSetEventDestinationResponse struct {
	AlreadyExistsException                         *interface{}
	BadRequestException                            *interface{}
	ContentType                                    string
	CreateConfigurationSetEventDestinationResponse map[string]interface{}
	LimitExceededException                         *interface{}
	NotFoundException                              *interface{}
	StatusCode                                     int64
	TooManyRequestsException                       *interface{}
}
