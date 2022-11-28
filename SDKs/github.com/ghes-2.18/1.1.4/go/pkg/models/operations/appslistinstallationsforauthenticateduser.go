package operations

import (
	"openapi/pkg/models/shared"
)

type AppsListInstallationsForAuthenticatedUserQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type AppsListInstallationsForAuthenticatedUserHeaders struct {
	Accept string `header:"style=simple,explode=false,name=accept"`
}

type AppsListInstallationsForAuthenticatedUser200ApplicationJSON struct {
	Installations []shared.InstallationGhes2 `json:"installations"`
	TotalCount    int64                      `json:"total_count"`
}

type AppsListInstallationsForAuthenticatedUser415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type AppsListInstallationsForAuthenticatedUserRequest struct {
	QueryParams AppsListInstallationsForAuthenticatedUserQueryParams
	Headers     AppsListInstallationsForAuthenticatedUserHeaders
}

type AppsListInstallationsForAuthenticatedUserResponse struct {
	ContentType                                                       string
	Headers                                                           map[string][]string
	StatusCode                                                        int64
	AppsListInstallationsForAuthenticatedUser200ApplicationJSONObject *AppsListInstallationsForAuthenticatedUser200ApplicationJSON
	AppsListInstallationsForAuthenticatedUser415ApplicationJSONObject *AppsListInstallationsForAuthenticatedUser415ApplicationJSON
	BasicError                                                        *shared.BasicError
}
