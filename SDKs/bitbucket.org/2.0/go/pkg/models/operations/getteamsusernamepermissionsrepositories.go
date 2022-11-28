package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernamePermissionsRepositoriesPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernamePermissionsRepositoriesQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetTeamsUsernamePermissionsRepositoriesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsUsernamePermissionsRepositoriesRequest struct {
	PathParams  GetTeamsUsernamePermissionsRepositoriesPathParams
	QueryParams GetTeamsUsernamePermissionsRepositoriesQueryParams
	Security    GetTeamsUsernamePermissionsRepositoriesSecurity
}

type GetTeamsUsernamePermissionsRepositoriesResponse struct {
	ContentType                    string
	StatusCode                     int64
	Error                          map[string]interface{}
	PaginatedRepositoryPermissions *shared.PaginatedRepositoryPermissions
}
