package operations

import (
	"openapi/pkg/models/shared"
)

type GetFunctionEventInvokeConfigPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type GetFunctionEventInvokeConfigQueryParams struct {
	Qualifier *string `queryParam:"style=form,explode=true,name=Qualifier"`
}

type GetFunctionEventInvokeConfigHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetFunctionEventInvokeConfigRequest struct {
	PathParams  GetFunctionEventInvokeConfigPathParams
	QueryParams GetFunctionEventInvokeConfigQueryParams
	Headers     GetFunctionEventInvokeConfigHeaders
}

type GetFunctionEventInvokeConfigResponse struct {
	ContentType                    string
	FunctionEventInvokeConfig      *shared.FunctionEventInvokeConfig
	InvalidParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
