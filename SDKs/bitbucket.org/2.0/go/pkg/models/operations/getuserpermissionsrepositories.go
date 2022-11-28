package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPermissionsRepositoriesQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetUserPermissionsRepositoriesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUserPermissionsRepositoriesRequest struct {
	QueryParams GetUserPermissionsRepositoriesQueryParams
	Security    GetUserPermissionsRepositoriesSecurity
}

type GetUserPermissionsRepositoriesResponse struct {
	ContentType                    string
	StatusCode                     int64
	PaginatedRepositoryPermissions *shared.PaginatedRepositoryPermissions
}
