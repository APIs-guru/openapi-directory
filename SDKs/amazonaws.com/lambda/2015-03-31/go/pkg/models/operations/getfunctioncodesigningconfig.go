package operations

import (
	"openapi/pkg/models/shared"
)

type GetFunctionCodeSigningConfigPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type GetFunctionCodeSigningConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFunctionCodeSigningConfigRequest struct {
	PathParams GetFunctionCodeSigningConfigPathParams
	Headers    GetFunctionCodeSigningConfigHeaders
}

type GetFunctionCodeSigningConfigResponse struct {
	ContentType                          string
	GetFunctionCodeSigningConfigResponse *shared.GetFunctionCodeSigningConfigResponse
	InvalidParameterValueException       *interface{}
	ResourceNotFoundException            *interface{}
	ServiceException                     *interface{}
	StatusCode                           int64
	TooManyRequestsException             *interface{}
}
