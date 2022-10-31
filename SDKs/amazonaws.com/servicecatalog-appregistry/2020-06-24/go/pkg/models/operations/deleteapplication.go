package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationPathParams struct {
	Application string `pathParam:"style=simple,explode=false,name=application"`
}

type DeleteApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
