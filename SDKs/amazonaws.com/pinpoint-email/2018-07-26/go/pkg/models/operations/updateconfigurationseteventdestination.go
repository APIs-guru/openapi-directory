package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateConfigurationSetEventDestinationPathParams struct {
	ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
	EventDestinationName string `pathParam:"style=simple,explode=false,name=EventDestinationName"`
}

type UpdateConfigurationSetEventDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateConfigurationSetEventDestinationRequestBodyEventDestination struct {
	CloudWatchDestination      *shared.CloudWatchDestination      `json:"CloudWatchDestination,omitempty"`
	Enabled                    *bool                              `json:"Enabled,omitempty"`
	KinesisFirehoseDestination *shared.KinesisFirehoseDestination `json:"KinesisFirehoseDestination,omitempty"`
	MatchingEventTypes         []shared.EventTypeEnum             `json:"MatchingEventTypes,omitempty"`
	PinpointDestination        *shared.PinpointDestination        `json:"PinpointDestination,omitempty"`
	SnsDestination             *shared.SnsDestination             `json:"SnsDestination,omitempty"`
}

type UpdateConfigurationSetEventDestinationRequestBody struct {
	EventDestination UpdateConfigurationSetEventDestinationRequestBodyEventDestination `json:"EventDestination"`
}

type UpdateConfigurationSetEventDestinationRequest struct {
	PathParams UpdateConfigurationSetEventDestinationPathParams
	Headers    UpdateConfigurationSetEventDestinationHeaders
	Request    UpdateConfigurationSetEventDestinationRequestBody `request:"mediaType=application/json"`
}

type UpdateConfigurationSetEventDestinationResponse struct {
	BadRequestException                            *interface{}
	ContentType                                    string
	NotFoundException                              *interface{}
	StatusCode                                     int64
	TooManyRequestsException                       *interface{}
	UpdateConfigurationSetEventDestinationResponse map[string]interface{}
}
