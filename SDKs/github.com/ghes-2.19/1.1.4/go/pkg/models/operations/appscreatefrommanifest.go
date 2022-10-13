package operations

import (
	"openapi/pkg/models/shared"
)

type AppsCreateFromManifestPathParams struct {
	Code string `pathParam:"style=simple,explode=false,name=code"`
}

type AppsCreateFromManifestRequest struct {
	PathParams AppsCreateFromManifestPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type AppsCreateFromManifestResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	AppsCreateFromManifest201ApplicationJSONObject map[string]interface{}
	BasicError                                     *shared.BasicError
	ValidationErrorSimple                          *shared.ValidationErrorSimple
}
