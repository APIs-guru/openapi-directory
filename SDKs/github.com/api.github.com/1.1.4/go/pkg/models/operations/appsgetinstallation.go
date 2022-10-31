package operations

import (
	"openapi/pkg/models/shared"
)

type AppsGetInstallationPathParams struct {
	InstallationID int64 `pathParam:"style=simple,explode=false,name=installation_id"`
}

type AppsGetInstallationRequest struct {
	PathParams AppsGetInstallationPathParams
}

type AppsGetInstallation415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type AppsGetInstallationResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	AppsGetInstallation415ApplicationJSONObject *AppsGetInstallation415ApplicationJSON
	BasicError                                  *shared.BasicError
	Installation                                *shared.Installation
}
