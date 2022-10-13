package operations

import (
	"openapi/pkg/models/shared"
)

type PutFunctionCodeSigningConfigPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type PutFunctionCodeSigningConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutFunctionCodeSigningConfigRequestBody struct {
	CodeSigningConfigArn string `json:"CodeSigningConfigArn"`
}

type PutFunctionCodeSigningConfigRequest struct {
	PathParams PutFunctionCodeSigningConfigPathParams
	Headers    PutFunctionCodeSigningConfigHeaders
	Request    PutFunctionCodeSigningConfigRequestBody `request:"mediaType=application/json"`
}

type PutFunctionCodeSigningConfigResponse struct {
	CodeSigningConfigNotFoundException   *interface{}
	ContentType                          string
	InvalidParameterValueException       *interface{}
	PutFunctionCodeSigningConfigResponse *shared.PutFunctionCodeSigningConfigResponse
	ResourceConflictException            *interface{}
	ResourceNotFoundException            *interface{}
	ServiceException                     *interface{}
	StatusCode                           int64
	TooManyRequestsException             *interface{}
}
