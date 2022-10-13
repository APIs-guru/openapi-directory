package operations

import (
	"openapi/pkg/models/shared"
)

type AppsGetUserInstallationPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type AppsGetUserInstallationRequest struct {
	PathParams AppsGetUserInstallationPathParams
}

type AppsGetUserInstallationResponse struct {
	ContentType       string
	StatusCode        int64
	InstallationGhes2 *shared.InstallationGhes2
}
