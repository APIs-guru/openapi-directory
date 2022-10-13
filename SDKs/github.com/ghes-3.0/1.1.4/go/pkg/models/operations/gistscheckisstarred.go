package operations

import (
	"openapi/pkg/models/shared"
)

type GistsCheckIsStarredPathParams struct {
	GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
}

type GistsCheckIsStarredRequest struct {
	PathParams GistsCheckIsStarredPathParams
}

type GistsCheckIsStarredResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	BasicError                                  *shared.BasicError
	GistsCheckIsStarred404ApplicationJSONObject map[string]interface{}
}
