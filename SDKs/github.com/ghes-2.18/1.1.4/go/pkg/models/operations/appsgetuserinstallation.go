package operations

import (
	"openapi/pkg/models/shared"
)

type AppsGetUserInstallationPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type AppsGetUserInstallationHeaders struct {
	Accept string `header:"style=simple,explode=false,name=accept"`
}

type AppsGetUserInstallationRequest struct {
	PathParams AppsGetUserInstallationPathParams
	Headers    AppsGetUserInstallationHeaders
}

type AppsGetUserInstallationResponse struct {
	ContentType       string
	StatusCode        int64
	InstallationGhes2 *shared.InstallationGhes2
}
