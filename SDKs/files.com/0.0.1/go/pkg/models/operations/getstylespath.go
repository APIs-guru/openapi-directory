package operations

import (
	"openapi/pkg/models/shared"
)

type GetStylesPathPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type GetStylesPathRequest struct {
	PathParams GetStylesPathPathParams
}

type GetStylesPathResponse struct {
	ContentType string
	StatusCode  int64
	StyleEntity *shared.StyleEntity
}
