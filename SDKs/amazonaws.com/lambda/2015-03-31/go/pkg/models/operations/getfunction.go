package operations

import (
	"openapi/pkg/models/shared"
)

type GetFunctionPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type GetFunctionQueryParams struct {
	Qualifier *string `queryParam:"style=form,explode=true,name=Qualifier"`
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
	PathParams  GetFunctionPathParams
	QueryParams GetFunctionQueryParams
	Headers     GetFunctionHeaders
}

type GetFunctionResponse struct {
	ContentType                    string
	GetFunctionResponse            *shared.GetFunctionResponse
	InvalidParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
