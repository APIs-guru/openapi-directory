package operations

import (
	"openapi/pkg/models/shared"
)

type GetEnvironmentPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=Name"`
}

type GetEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEnvironmentRequest struct {
	PathParams GetEnvironmentPathParams
	Headers    GetEnvironmentHeaders
}

type GetEnvironmentResponse struct {
	ContentType               string
	GetEnvironmentOutput      *shared.GetEnvironmentOutput
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
