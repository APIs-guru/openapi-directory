package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConfigurationSetEventDestinationPathParams struct {
	ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
}

type CreateConfigurationSetEventDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateConfigurationSetEventDestinationRequestBodyEventDestination struct {
	CloudWatchLogsDestination  *shared.CloudWatchLogsDestination  `json:"CloudWatchLogsDestination"`
	Enabled                    *bool                              `json:"Enabled"`
	KinesisFirehoseDestination *shared.KinesisFirehoseDestination `json:"KinesisFirehoseDestination"`
	MatchingEventTypes         []shared.EventTypeEnum             `json:"MatchingEventTypes"`
	SnsDestination             *shared.SnsDestination             `json:"SnsDestination"`
}

type CreateConfigurationSetEventDestinationRequestBody struct {
	EventDestination     *CreateConfigurationSetEventDestinationRequestBodyEventDestination `json:"EventDestination"`
	EventDestinationName *string                                                            `json:"EventDestinationName"`
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
	InternalServiceErrorException                  *interface{}
	LimitExceededException                         *interface{}
	NotFoundException                              *interface{}
	StatusCode                                     int64
	TooManyRequestsException                       *interface{}
}
