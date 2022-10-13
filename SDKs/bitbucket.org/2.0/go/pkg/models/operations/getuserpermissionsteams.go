package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPermissionsTeamsQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetUserPermissionsTeamsSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetUserPermissionsTeamsSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetUserPermissionsTeamsSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUserPermissionsTeamsSecurity struct {
	Option1 *GetUserPermissionsTeamsSecurityOption1 `security:"option"`
	Option2 *GetUserPermissionsTeamsSecurityOption2 `security:"option"`
	Option3 *GetUserPermissionsTeamsSecurityOption3 `security:"option"`
}

type GetUserPermissionsTeamsRequest struct {
	QueryParams GetUserPermissionsTeamsQueryParams
	Security    GetUserPermissionsTeamsSecurity
}

type GetUserPermissionsTeamsResponse struct {
	ContentType              string
	StatusCode               int64
	PaginatedTeamPermissions *shared.PaginatedTeamPermissions
}
