package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEventSourceMappingPathParams struct {
	UUID string `pathParam:"style=simple,explode=false,name=UUID"`
}

type UpdateEventSourceMappingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateEventSourceMappingRequestBodyDestinationConfig struct {
	OnFailure *shared.OnFailure `json:"OnFailure"`
	OnSuccess *shared.OnSuccess `json:"OnSuccess"`
}

type UpdateEventSourceMappingRequestBody struct {
	BatchSize                      *int64                                                `json:"BatchSize"`
	BisectBatchOnFunctionError     *bool                                                 `json:"BisectBatchOnFunctionError"`
	DestinationConfig              *UpdateEventSourceMappingRequestBodyDestinationConfig `json:"DestinationConfig"`
	Enabled                        *bool                                                 `json:"Enabled"`
	FunctionName                   *string                                               `json:"FunctionName"`
	FunctionResponseTypes          []shared.FunctionResponseTypeEnum                     `json:"FunctionResponseTypes"`
	MaximumBatchingWindowInSeconds *int64                                                `json:"MaximumBatchingWindowInSeconds"`
	MaximumRecordAgeInSeconds      *int64                                                `json:"MaximumRecordAgeInSeconds"`
	MaximumRetryAttempts           *int64                                                `json:"MaximumRetryAttempts"`
	ParallelizationFactor          *int64                                                `json:"ParallelizationFactor"`
	SourceAccessConfigurations     []shared.SourceAccessConfiguration                    `json:"SourceAccessConfigurations"`
	TumblingWindowInSeconds        *int64                                                `json:"TumblingWindowInSeconds"`
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
