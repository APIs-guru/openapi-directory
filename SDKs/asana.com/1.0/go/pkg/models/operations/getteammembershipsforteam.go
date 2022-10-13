package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamMembershipsForTeamPathParams struct {
	TeamGid string `pathParam:"style=simple,explode=false,name=team_gid"`
}

type GetTeamMembershipsForTeamQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetTeamMembershipsForTeamRequest struct {
	PathParams  GetTeamMembershipsForTeamPathParams
	QueryParams GetTeamMembershipsForTeamQueryParams
}

type GetTeamMembershipsForTeam200ApplicationJSON struct {
	Data []shared.TeamMembershipCompact `json:"data"`
}

type GetTeamMembershipsForTeamResponse struct {
	ContentType                                       string
	ErrorResponse                                     *shared.ErrorResponse
	StatusCode                                        int64
	GetTeamMembershipsForTeam200ApplicationJSONObject *GetTeamMembershipsForTeam200ApplicationJSON
}
