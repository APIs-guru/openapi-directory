package operations

import (
	"openapi/pkg/models/shared"
)

type GetApplicationPathParams struct {
	Application string `pathParam:"style=simple,explode=false,name=application"`
}

type GetApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
