package operations

import (
	"openapi/pkg/models/shared"
)

type AppsListReposAccessibleToInstallationQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type AppsListReposAccessibleToInstallationRequest struct {
	QueryParams AppsListReposAccessibleToInstallationQueryParams
}

type AppsListReposAccessibleToInstallation200ApplicationJSON struct {
	Repositories        []shared.Repository `json:"repositories"`
	RepositorySelection *string             `json:"repository_selection,omitempty"`
	TotalCount          int64               `json:"total_count"`
}

type AppsListReposAccessibleToInstallationResponse struct {
	ContentType                                                   string
	Headers                                                       map[string][]string
	StatusCode                                                    int64
	AppsListReposAccessibleToInstallation200ApplicationJSONObject *AppsListReposAccessibleToInstallation200ApplicationJSON
	BasicError                                                    *shared.BasicError
}
