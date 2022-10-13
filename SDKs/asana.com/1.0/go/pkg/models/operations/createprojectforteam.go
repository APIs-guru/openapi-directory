package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProjectForTeamPathParams struct {
	TeamGid string `pathParam:"style=simple,explode=false,name=team_gid"`
}

type CreateProjectForTeamQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateProjectForTeamRequestBody struct {
	Data *shared.ProjectRequest `json:"data"`
}

type CreateProjectForTeamRequest struct {
	PathParams  CreateProjectForTeamPathParams
	QueryParams CreateProjectForTeamQueryParams
	Request     CreateProjectForTeamRequestBody `request:"mediaType=application/json"`
}

type CreateProjectForTeam201ApplicationJSON struct {
	Data *shared.ProjectResponse `json:"data"`
}

type CreateProjectForTeamResponse struct {
	ContentType                                  string
	ErrorResponse                                *shared.ErrorResponse
	StatusCode                                   int64
	CreateProjectForTeam201ApplicationJSONObject *CreateProjectForTeam201ApplicationJSON
}
