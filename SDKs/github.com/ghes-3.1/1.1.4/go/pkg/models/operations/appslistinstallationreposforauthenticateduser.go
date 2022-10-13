package operations

import (
	"openapi/pkg/models/shared"
)

type AppsListInstallationReposForAuthenticatedUserPathParams struct {
	InstallationID int64 `pathParam:"style=simple,explode=false,name=installation_id"`
}

type AppsListInstallationReposForAuthenticatedUserQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type AppsListInstallationReposForAuthenticatedUserRequest struct {
	PathParams  AppsListInstallationReposForAuthenticatedUserPathParams
	QueryParams AppsListInstallationReposForAuthenticatedUserQueryParams
}

type AppsListInstallationReposForAuthenticatedUser200ApplicationJSON struct {
	Repositories        []shared.Repository `json:"repositories"`
	RepositorySelection *string             `json:"repository_selection"`
	TotalCount          int64               `json:"total_count"`
}

type AppsListInstallationReposForAuthenticatedUserResponse struct {
	ContentType                                                           string
	Headers                                                               map[string][]string
	StatusCode                                                            int64
	AppsListInstallationReposForAuthenticatedUser200ApplicationJSONObject *AppsListInstallationReposForAuthenticatedUser200ApplicationJSON
	BasicError                                                            *shared.BasicError
}
