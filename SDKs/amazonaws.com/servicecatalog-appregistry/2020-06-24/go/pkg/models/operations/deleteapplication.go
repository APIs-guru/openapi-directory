package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationPathParams struct {
	Application string `pathParam:"style=simple,explode=false,name=application"`
}

type DeleteApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteApplicationRequest struct {
	PathParams DeleteApplicationPathParams
	Headers    DeleteApplicationHeaders
}

type DeleteApplicationResponse struct {
	ContentType               string
	DeleteApplicationResponse *shared.DeleteApplicationResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
