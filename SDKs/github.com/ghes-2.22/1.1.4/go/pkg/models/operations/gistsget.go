package operations

import (
	"openapi/pkg/models/shared"
)

type GistsGetPathParams struct {
	GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
}

type GistsGetRequest struct {
	PathParams GistsGetPathParams
}

type GistsGet403ApplicationJSONBlock struct {
	CreatedAt *string `json:"created_at"`
	HTMLURL   *string `json:"html_url"`
	Reason    *string `json:"reason"`
}

type GistsGet403ApplicationJSON struct {
	Block            *GistsGet403ApplicationJSONBlock `json:"block"`
	DocumentationURL *string                          `json:"documentation_url"`
	Message          *string                          `json:"message"`
}

type GistsGetResponse struct {
	ContentType                      string
	StatusCode                       int64
	BasicError                       *shared.BasicError
	GistSimple                       *shared.GistSimple
	GistsGet403ApplicationJSONObject *GistsGet403ApplicationJSON
}
