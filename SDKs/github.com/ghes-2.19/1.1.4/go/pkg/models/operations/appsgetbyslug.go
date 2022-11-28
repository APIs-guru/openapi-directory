package operations

import (
	"openapi/pkg/models/shared"
)

type AppsGetBySlugPathParams struct {
	AppSlug string `pathParam:"style=simple,explode=false,name=app_slug"`
}

type AppsGetBySlug415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type AppsGetBySlugRequest struct {
	PathParams AppsGetBySlugPathParams
}

type AppsGetBySlugResponse struct {
	ContentType                           string
	StatusCode                            int64
	AppsGetBySlug415ApplicationJSONObject *AppsGetBySlug415ApplicationJSON
	BasicError                            *shared.BasicError
	Integration                           map[string]interface{}
}
