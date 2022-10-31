package operations

import (
	"openapi/pkg/models/shared"
)

type AppsGetInstallationPathParams struct {
	InstallationID int64 `pathParam:"style=simple,explode=false,name=installation_id"`
}

type AppsGetInstallationHeaders struct {
	Accept string `header:"style=simple,explode=false,name=accept"`
}

type AppsGetInstallationRequest struct {
	PathParams AppsGetInstallationPathParams
	Headers    AppsGetInstallationHeaders
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
	InstallationGhes2                           *shared.InstallationGhes2
}
