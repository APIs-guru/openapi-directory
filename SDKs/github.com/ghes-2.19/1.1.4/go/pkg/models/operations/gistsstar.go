package operations

import (
	"openapi/pkg/models/shared"
)

type GistsStarPathParams struct {
	GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
}

type GistsStarRequest struct {
	PathParams GistsStarPathParams
}

type GistsStarResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
