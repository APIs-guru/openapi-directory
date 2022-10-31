package operations

import (
	"openapi/pkg/models/shared"
)

type GistsUnstarPathParams struct {
	GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
}

type GistsUnstarRequest struct {
	PathParams GistsUnstarPathParams
}

type GistsUnstarResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
