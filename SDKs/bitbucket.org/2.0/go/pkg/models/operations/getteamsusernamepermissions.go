package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernamePermissionsPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernamePermissionsQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetTeamsUsernamePermissionsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsUsernamePermissionsRequest struct {
	PathParams  GetTeamsUsernamePermissionsPathParams
	QueryParams GetTeamsUsernamePermissionsQueryParams
	Security    GetTeamsUsernamePermissionsSecurity
}

type GetTeamsUsernamePermissionsResponse struct {
	ContentType              string
	StatusCode               int64
	Error                    map[string]interface{}
	PaginatedTeamPermissions *shared.PaginatedTeamPermissions
}
