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
	OnFailure *shared.OnFailure `json:"OnFailure"`
	OnSuccess *shared.OnSuccess `json:"OnSuccess"`
}

type CreateEventSourceMappingRequestBodySelfManagedEventSource struct {
	Endpoints map[string][]string `json:"Endpoints"`
}

type CreateEventSourceMappingRequestBodyStartingPositionEnum string

const (
	CreateEventSourceMappingRequestBodyStartingPositionEnumTrimHorizon CreateEventSourceMappingRequestBodyStartingPositionEnum = "TRIM_HORIZON"
	CreateEventSourceMappingRequestBodyStartingPositionEnumLatest      CreateEventSourceMappingRequestBodyStartingPositionEnum = "LATEST"
	CreateEventSourceMappingRequestBodyStartingPositionEnumAtTimestamp CreateEventSourceMappingRequestBodyStartingPositionEnum = "AT_TIMESTAMP"
)

type CreateEventSourceMappingRequestBody struct {
	BatchSize                      *int64                                                     `json:"BatchSize"`
	BisectBatchOnFunctionError     *bool                                                      `json:"BisectBatchOnFunctionError"`
	DestinationConfig              *CreateEventSourceMappingRequestBodyDestinationConfig      `json:"DestinationConfig"`
	Enabled                        *bool                                                      `json:"Enabled"`
	EventSourceArn                 *string                                                    `json:"EventSourceArn"`
	FunctionName                   string                                                     `json:"FunctionName"`
	FunctionResponseTypes          []shared.FunctionResponseTypeEnum                          `json:"FunctionResponseTypes"`
	MaximumBatchingWindowInSeconds *int64                                                     `json:"MaximumBatchingWindowInSeconds"`
	MaximumRecordAgeInSeconds      *int64                                                     `json:"MaximumRecordAgeInSeconds"`
	MaximumRetryAttempts           *int64                                                     `json:"MaximumRetryAttempts"`
	ParallelizationFactor          *int64                                                     `json:"ParallelizationFactor"`
	Queues                         []string                                                   `json:"Queues"`
	SelfManagedEventSource         *CreateEventSourceMappingRequestBodySelfManagedEventSource `json:"SelfManagedEventSource"`
	SourceAccessConfigurations     []shared.SourceAccessConfiguration                         `json:"SourceAccessConfigurations"`
	StartingPosition               *CreateEventSourceMappingRequestBodyStartingPositionEnum   `json:"StartingPosition"`
	StartingPositionTimestamp      *time.Time                                                 `json:"StartingPositionTimestamp"`
	Topics                         []string                                                   `json:"Topics"`
	TumblingWindowInSeconds        *int64                                                     `json:"TumblingWindowInSeconds"`
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
