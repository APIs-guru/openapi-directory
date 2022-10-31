package operations

import (
	"openapi/pkg/models/shared"
)

type GistsDeletePathParams struct {
	GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
}

type GistsDeleteRequest struct {
	PathParams GistsDeletePathParams
}

type GistsDeleteResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
