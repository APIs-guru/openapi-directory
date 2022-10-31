package operations

import (
	"openapi/pkg/models/shared"
)

type GetCanaryPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetCanaryHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCanaryRequest struct {
	PathParams GetCanaryPathParams
	Headers    GetCanaryHeaders
}

type GetCanaryResponse struct {
	ContentType             string
	GetCanaryResponse       *shared.GetCanaryResponse
	InternalServerException *interface{}
	StatusCode              int64
	ValidationException     *interface{}
}
