package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveUserForTeamPathParams struct {
	TeamGid string `pathParam:"style=simple,explode=false,name=team_gid"`
}

type RemoveUserForTeamQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type RemoveUserForTeamRequestBody struct {
	Data *shared.TeamRemoveUserRequest `json:"data,omitempty"`
}

type RemoveUserForTeam204ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type RemoveUserForTeamRequest struct {
	PathParams  RemoveUserForTeamPathParams
	QueryParams RemoveUserForTeamQueryParams
	Request     RemoveUserForTeamRequestBody `request:"mediaType=application/json"`
}

type RemoveUserForTeamResponse struct {
	ContentType                               string
	ErrorResponse                             *shared.ErrorResponse
	StatusCode                                int64
	RemoveUserForTeam204ApplicationJSONObject *RemoveUserForTeam204ApplicationJSON
}
