package operations

import (
	"openapi/pkg/models/shared"
)

type GetFunctionPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type GetFunctionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFunctionRequest struct {
	PathParams GetFunctionPathParams
	Headers    GetFunctionHeaders
}

type GetFunctionResponse struct {
	ContentType               string
	GetFunctionResponse       *shared.GetFunctionResponse
	ResourceNotFoundException *shared.ResourceNotFoundException
	ServiceException          *shared.ServiceException
	StatusCode                int64
}
