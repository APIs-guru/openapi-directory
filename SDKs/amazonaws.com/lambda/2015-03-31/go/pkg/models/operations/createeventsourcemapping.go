package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateEventSourceMappingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateEventSourceMappingRequestBodyDestinationConfig struct {
	OnFailure *shared.OnFailure `json:"OnFailure,omitempty"`
	OnSuccess *shared.OnSuccess `json:"OnSuccess,omitempty"`
}

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
