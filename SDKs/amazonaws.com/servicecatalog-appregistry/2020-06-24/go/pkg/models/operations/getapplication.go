package operations

import (
	"openapi/pkg/models/shared"
)

type GetApplicationPathParams struct {
	Application string `pathParam:"style=simple,explode=false,name=application"`
}

type GetApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetApplicationRequest struct {
	PathParams GetApplicationPathParams
	Headers    GetApplicationHeaders
}

type GetApplicationResponse struct {
	ContentType               string
	GetApplicationResponse    *shared.GetApplicationResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
