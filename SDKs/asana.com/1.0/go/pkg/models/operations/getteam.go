package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamPathParams struct {
	TeamGid string `pathParam:"style=simple,explode=false,name=team_gid"`
}

type GetTeamQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetTeamRequest struct {
	PathParams  GetTeamPathParams
	QueryParams GetTeamQueryParams
}

type GetTeam200ApplicationJSON struct {
	Data *shared.TeamResponse `json:"data"`
}

type GetTeamResponse struct {
	ContentType                     string
	ErrorResponse                   *shared.ErrorResponse
	StatusCode                      int64
	GetTeam200ApplicationJSONObject *GetTeam200ApplicationJSON
}
