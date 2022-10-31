package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEventSourceMappingPathParams struct {
	UUID string `pathParam:"style=simple,explode=false,name=UUID"`
}

type UpdateEventSourceMappingHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateEventSourceMappingRequestBodyDestinationConfig struct {
	OnFailure *shared.OnFailure `json:"OnFailure,omitempty"`
	OnSuccess *shared.OnSuccess `json:"OnSuccess,omitempty"`
}

type UpdateEventSourceMappingRequestBody struct {
	BatchSize                      *int64                                                `json:"BatchSize,omitempty"`
	BisectBatchOnFunctionError     *bool                                                 `json:"BisectBatchOnFunctionError,omitempty"`
	DestinationConfig              *UpdateEventSourceMappingRequestBodyDestinationConfig `json:"DestinationConfig,omitempty"`
	Enabled                        *bool                                                 `json:"Enabled,omitempty"`
	FunctionName                   *string                                               `json:"FunctionName,omitempty"`
	FunctionResponseTypes          []shared.FunctionResponseTypeEnum                     `json:"FunctionResponseTypes,omitempty"`
	MaximumBatchingWindowInSeconds *int64                                                `json:"MaximumBatchingWindowInSeconds,omitempty"`
	MaximumRecordAgeInSeconds      *int64                                                `json:"MaximumRecordAgeInSeconds,omitempty"`
	MaximumRetryAttempts           *int64                                                `json:"MaximumRetryAttempts,omitempty"`
	ParallelizationFactor          *int64                                                `json:"ParallelizationFactor,omitempty"`
	SourceAccessConfigurations     []shared.SourceAccessConfiguration                    `json:"SourceAccessConfigurations,omitempty"`
	TumblingWindowInSeconds        *int64                                                `json:"TumblingWindowInSeconds,omitempty"`
}

type UpdateEventSourceMappingRequest struct {
	PathParams UpdateEventSourceMappingPathParams
	Headers    UpdateEventSourceMappingHeaders
	Request    UpdateEventSourceMappingRequestBody `request:"mediaType=application/json"`
}

type UpdateEventSourceMappingResponse struct {
	ContentType                     string
	EventSourceMappingConfiguration *shared.EventSourceMappingConfiguration
	InvalidParameterValueException  *interface{}
	ResourceConflictException       *interface{}
	ResourceInUseException          *interface{}
	ResourceNotFoundException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
