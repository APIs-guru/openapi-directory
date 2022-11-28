package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateEventSourceMappingHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateEventSourceMappingRequestBodyDestinationConfig
// A configuration object that specifies the destination of an event after Lambda processes it.
type CreateEventSourceMappingRequestBodyDestinationConfig struct {
	OnFailure *shared.OnFailure `json:"OnFailure,omitempty"`
	OnSuccess *shared.OnSuccess `json:"OnSuccess,omitempty"`
}

// CreateEventSourceMappingRequestBodySelfManagedEventSource
// The self-managed Apache Kafka cluster for your event source.
type CreateEventSourceMappingRequestBodySelfManagedEventSource struct {
	Endpoints map[string][]string `json:"Endpoints,omitempty"`
}

type CreateEventSourceMappingRequestBodyStartingPositionEnum string

const (
	CreateEventSourceMappingRequestBodyStartingPositionEnumTrimHorizon CreateEventSourceMappingRequestBodyStartingPositionEnum = "TRIM_HORIZON"
	CreateEventSourceMappingRequestBodyStartingPositionEnumLatest      CreateEventSourceMappingRequestBodyStartingPositionEnum = "LATEST"
	CreateEventSourceMappingRequestBodyStartingPositionEnumAtTimestamp CreateEventSourceMappingRequestBodyStartingPositionEnum = "AT_TIMESTAMP"
)

type CreateEventSourceMappingRequestBody struct {
	BatchSize                      *int64                                                     `json:"BatchSize,omitempty"`
	BisectBatchOnFunctionError     *bool                                                      `json:"BisectBatchOnFunctionError,omitempty"`
	DestinationConfig              *CreateEventSourceMappingRequestBodyDestinationConfig      `json:"DestinationConfig,omitempty"`
	Enabled                        *bool                                                      `json:"Enabled,omitempty"`
	EventSourceArn                 *string                                                    `json:"EventSourceArn,omitempty"`
	FunctionName                   string                                                     `json:"FunctionName"`
	FunctionResponseTypes          []shared.FunctionResponseTypeEnum                          `json:"FunctionResponseTypes,omitempty"`
	MaximumBatchingWindowInSeconds *int64                                                     `json:"MaximumBatchingWindowInSeconds,omitempty"`
	MaximumRecordAgeInSeconds      *int64                                                     `json:"MaximumRecordAgeInSeconds,omitempty"`
	MaximumRetryAttempts           *int64                                                     `json:"MaximumRetryAttempts,omitempty"`
	ParallelizationFactor          *int64                                                     `json:"ParallelizationFactor,omitempty"`
	Queues                         []string                                                   `json:"Queues,omitempty"`
	SelfManagedEventSource         *CreateEventSourceMappingRequestBodySelfManagedEventSource `json:"SelfManagedEventSource,omitempty"`
	SourceAccessConfigurations     []shared.SourceAccessConfiguration                         `json:"SourceAccessConfigurations,omitempty"`
	StartingPosition               *CreateEventSourceMappingRequestBodyStartingPositionEnum   `json:"StartingPosition,omitempty"`
	StartingPositionTimestamp      *time.Time                                                 `json:"StartingPositionTimestamp,omitempty"`
	Topics                         []string                                                   `json:"Topics,omitempty"`
	TumblingWindowInSeconds        *int64                                                     `json:"TumblingWindowInSeconds,omitempty"`
}

type CreateEventSourceMappingRequest struct {
	Headers CreateEventSourceMappingHeaders
	Request CreateEventSourceMappingRequestBody `request:"mediaType=application/json"`
}

type CreateEventSourceMappingResponse struct {
	ContentType                     string
	EventSourceMappingConfiguration *shared.EventSourceMappingConfiguration
	InvalidParameterValueException  *interface{}
	ResourceConflictException       *interface{}
	ResourceNotFoundException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
