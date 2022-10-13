package operations

import (
	"openapi/pkg/models/shared"
)

type GetFunctionConfigurationPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type GetFunctionConfigurationQueryParams struct {
	Qualifier *string `queryParam:"style=form,explode=true,name=Qualifier"`
}

type GetFunctionConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFunctionConfigurationRequest struct {
	PathParams  GetFunctionConfigurationPathParams
	QueryParams GetFunctionConfigurationQueryParams
	Headers     GetFunctionConfigurationHeaders
}

type GetFunctionConfigurationResponse struct {
	ContentType                    string
	FunctionConfiguration          *shared.FunctionConfiguration
	InvalidParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
