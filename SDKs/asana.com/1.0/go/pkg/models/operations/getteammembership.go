package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamMembershipPathParams struct {
	TeamMembershipGid string `pathParam:"style=simple,explode=false,name=team_membership_gid"`
}

type GetTeamMembershipQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetTeamMembershipRequest struct {
	PathParams  GetTeamMembershipPathParams
	QueryParams GetTeamMembershipQueryParams
}

type GetTeamMembership200ApplicationJSON struct {
	Data *shared.TeamMembershipResponse `json:"data"`
}

type GetTeamMembershipResponse struct {
	ContentType                               string
	ErrorResponse                             *shared.ErrorResponse
	StatusCode                                int64
	GetTeamMembership200ApplicationJSONObject *GetTeamMembership200ApplicationJSON
}
