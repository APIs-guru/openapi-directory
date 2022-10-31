package operations

import (
	"openapi/pkg/models/shared"
)

type GetOutpostPathParams struct {
	OutpostID string `pathParam:"style=simple,explode=false,name=OutpostId"`
}

type GetOutpostHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
