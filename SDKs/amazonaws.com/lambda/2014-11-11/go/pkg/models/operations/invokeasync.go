package operations

import (
	"openapi/pkg/models/shared"
)

type InvokeAsyncPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type InvokeAsyncHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type InvokeAsyncRequestBody struct {
	InvokeArgs string `json:"InvokeArgs"`
}

type InvokeAsyncRequest struct {
	PathParams InvokeAsyncPathParams
	Headers    InvokeAsyncHeaders
	Request    InvokeAsyncRequestBody `request:"mediaType=application/json"`
}

type InvokeAsyncResponse struct {
	ContentType                    string
	InvalidRequestContentException *shared.InvalidRequestContentException
	InvokeAsyncResponse            *shared.InvokeAsyncResponse
	ResourceNotFoundException      *shared.ResourceNotFoundException
	ServiceException               *shared.ServiceException
	StatusCode                     int64
}
