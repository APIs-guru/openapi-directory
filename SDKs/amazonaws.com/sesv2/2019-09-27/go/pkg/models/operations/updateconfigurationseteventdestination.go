package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateConfigurationSetEventDestinationPathParams struct {
	ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
	EventDestinationName string `pathParam:"style=simple,explode=false,name=EventDestinationName"`
}

type UpdateConfigurationSetEventDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateConfigurationSetEventDestinationRequestBodyEventDestination
// An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
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
