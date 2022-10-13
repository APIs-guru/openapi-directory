package operations

import (
	"openapi/pkg/models/shared"
)

type GetOutpostPathParams struct {
	OutpostID string `pathParam:"style=simple,explode=false,name=OutpostId"`
}

type GetOutpostHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetOutpostRequest struct {
	PathParams GetOutpostPathParams
	Headers    GetOutpostHeaders
}

type GetOutpostResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	GetOutpostOutput        *shared.GetOutpostOutput
	InternalServerException *interface{}
	NotFoundException       *interface{}
	StatusCode              int64
	ValidationException     *interface{}
}
