package operations

import (
	"openapi/pkg/models/shared"
)

type PutFunctionEventInvokeConfigPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type PutFunctionEventInvokeConfigQueryParams struct {
	Qualifier *string `queryParam:"style=form,explode=true,name=Qualifier"`
}

type PutFunctionEventInvokeConfigHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// PutFunctionEventInvokeConfigRequestBodyDestinationConfig
// A configuration object that specifies the destination of an event after Lambda processes it.
type PutFunctionEventInvokeConfigRequestBodyDestinationConfig struct {
	OnFailure *shared.OnFailure `json:"OnFailure,omitempty"`
	OnSuccess *shared.OnSuccess `json:"OnSuccess,omitempty"`
}

type PutFunctionEventInvokeConfigRequestBody struct {
	DestinationConfig        *PutFunctionEventInvokeConfigRequestBodyDestinationConfig `json:"DestinationConfig,omitempty"`
	MaximumEventAgeInSeconds *int64                                                    `json:"MaximumEventAgeInSeconds,omitempty"`
	MaximumRetryAttempts     *int64                                                    `json:"MaximumRetryAttempts,omitempty"`
}

type PutFunctionEventInvokeConfigRequest struct {
	PathParams  PutFunctionEventInvokeConfigPathParams
	QueryParams PutFunctionEventInvokeConfigQueryParams
	Headers     PutFunctionEventInvokeConfigHeaders
	Request     PutFunctionEventInvokeConfigRequestBody `request:"mediaType=application/json"`
}

type PutFunctionEventInvokeConfigResponse struct {
	ContentType                    string
	FunctionEventInvokeConfig      *shared.FunctionEventInvokeConfig
	InvalidParameterValueException *interface{}
	ResourceConflictException      *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
