package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFunctionEventInvokeConfigPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type UpdateFunctionEventInvokeConfigQueryParams struct {
	Qualifier *string `queryParam:"style=form,explode=true,name=Qualifier"`
}

type UpdateFunctionEventInvokeConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig struct {
	OnFailure *shared.OnFailure `json:"OnFailure"`
	OnSuccess *shared.OnSuccess `json:"OnSuccess"`
}

type UpdateFunctionEventInvokeConfigRequestBody struct {
	DestinationConfig        *UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig `json:"DestinationConfig"`
	MaximumEventAgeInSeconds *int64                                                       `json:"MaximumEventAgeInSeconds"`
	MaximumRetryAttempts     *int64                                                       `json:"MaximumRetryAttempts"`
}

type UpdateFunctionEventInvokeConfigRequest struct {
	PathParams  UpdateFunctionEventInvokeConfigPathParams
	QueryParams UpdateFunctionEventInvokeConfigQueryParams
	Headers     UpdateFunctionEventInvokeConfigHeaders
	Request     UpdateFunctionEventInvokeConfigRequestBody `request:"mediaType=application/json"`
}

type UpdateFunctionEventInvokeConfigResponse struct {
	ContentType                    string
	FunctionEventInvokeConfig      *shared.FunctionEventInvokeConfig
	InvalidParameterValueException *interface{}
	ResourceConflictException      *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
