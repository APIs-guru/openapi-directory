package operations

import (
	"openapi/pkg/models/shared"
)

type AppsCreateInstallationAccessTokenPathParams struct {
	InstallationID int64 `pathParam:"style=simple,explode=false,name=installation_id"`
}

type AppsCreateInstallationAccessTokenHeaders struct {
	Accept string `header:"name=accept"`
}

type AppsCreateInstallationAccessTokenRequestBody struct {
	Permissions   *shared.AppPermissions `json:"permissions"`
	Repositories  []string               `json:"repositories"`
	RepositoryIds []int64                `json:"repository_ids"`
}

type AppsCreateInstallationAccessTokenRequest struct {
	PathParams AppsCreateInstallationAccessTokenPathParams
	Headers    AppsCreateInstallationAccessTokenHeaders
	Request    *AppsCreateInstallationAccessTokenRequestBody `request:"mediaType=application/json"`
}

type AppsCreateInstallationAccessToken415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type AppsCreateInstallationAccessTokenResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	AppsCreateInstallationAccessToken415ApplicationJSONObject *AppsCreateInstallationAccessToken415ApplicationJSON
	BasicError                                                *shared.BasicError
	InstallationToken                                         *shared.InstallationToken
	ValidationError                                           *shared.ValidationError
}
