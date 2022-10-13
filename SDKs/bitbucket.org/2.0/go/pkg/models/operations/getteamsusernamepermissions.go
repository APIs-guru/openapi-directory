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

type GetTeamsUsernamePermissionsSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetTeamsUsernamePermissionsSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetTeamsUsernamePermissionsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsUsernamePermissionsSecurity struct {
	Option1 *GetTeamsUsernamePermissionsSecurityOption1 `security:"option"`
	Option2 *GetTeamsUsernamePermissionsSecurityOption2 `security:"option"`
	Option3 *GetTeamsUsernamePermissionsSecurityOption3 `security:"option"`
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
