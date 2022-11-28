package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPermissionsTeamsQueryParams struct {
	Q    *string `queryParam:"style=form,explode=true,name=q"`
	Sort *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetUserPermissionsTeamsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
