package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsDeleteLegacyPathParams struct {
	ReactionID int64 `pathParam:"style=simple,explode=false,name=reaction_id"`
}

type ReactionsDeleteLegacy415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReactionsDeleteLegacyRequest struct {
	PathParams ReactionsDeleteLegacyPathParams
}

type ReactionsDeleteLegacyResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	BasicError                                    *shared.BasicError
	ReactionsDeleteLegacy415ApplicationJSONObject *ReactionsDeleteLegacy415ApplicationJSON
}
