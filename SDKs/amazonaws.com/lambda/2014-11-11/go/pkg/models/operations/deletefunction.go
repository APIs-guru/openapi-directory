package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFunctionPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type DeleteFunctionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteFunctionRequest struct {
	PathParams DeleteFunctionPathParams
	Headers    DeleteFunctionHeaders
}

type DeleteFunctionResponse struct {
	ContentType               string
	ResourceNotFoundException *shared.ResourceNotFoundException
	ServiceException          *shared.ServiceException
	StatusCode                int64
}
