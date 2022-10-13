package operations

import (
	"openapi/pkg/models/shared"
)

type GetMapTilePathParams struct {
	MapName string `pathParam:"style=simple,explode=false,name=MapName"`
	X       string `pathParam:"style=simple,explode=false,name=X"`
	Y       string `pathParam:"style=simple,explode=false,name=Y"`
	Z       string `pathParam:"style=simple,explode=false,name=Z"`
}

type GetMapTileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetMapTileRequest struct {
	PathParams GetMapTilePathParams
	Headers    GetMapTileHeaders
}

type GetMapTileResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetMapTileResponse        *shared.GetMapTileResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
