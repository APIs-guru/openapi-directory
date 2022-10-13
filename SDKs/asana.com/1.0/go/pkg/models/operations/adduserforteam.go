package operations

import (
	"openapi/pkg/models/shared"
)

type AddUserForTeamPathParams struct {
	TeamGid string `pathParam:"style=simple,explode=false,name=team_gid"`
}

type AddUserForTeamQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type AddUserForTeamRequestBody struct {
	Data *shared.TeamAddUserRequest `json:"data"`
}

type AddUserForTeamRequest struct {
	PathParams  AddUserForTeamPathParams
	QueryParams AddUserForTeamQueryParams
	Request     AddUserForTeamRequestBody `request:"mediaType=application/json"`
}

type AddUserForTeam200ApplicationJSON struct {
	Data *shared.UserResponse `json:"data"`
}

type AddUserForTeamResponse struct {
	ContentType                            string
	ErrorResponse                          *shared.ErrorResponse
	StatusCode                             int64
	AddUserForTeam200ApplicationJSONObject *AddUserForTeam200ApplicationJSON
}
