package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsRoleEnum string

const (
	GetTeamsRoleEnumAdmin       GetTeamsRoleEnum = "admin"
	GetTeamsRoleEnumContributor GetTeamsRoleEnum = "contributor"
	GetTeamsRoleEnumMember      GetTeamsRoleEnum = "member"
)

type GetTeamsQueryParams struct {
	Role *GetTeamsRoleEnum `queryParam:"style=form,explode=true,name=role"`
}

type GetTeamsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsRequest struct {
	QueryParams GetTeamsQueryParams
	Security    GetTeamsSecurity
}

type GetTeamsResponse struct {
	ContentType    string
	StatusCode     int64
	Error          map[string]interface{}
	PaginatedTeams *shared.PaginatedTeams
}
