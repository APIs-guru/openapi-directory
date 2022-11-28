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

type CreateProjectForTeamRequestBodyInput struct {
	Data *shared.ProjectRequestInput `json:"data,omitempty"`
}

type CreateProjectForTeam201ApplicationJSON struct {
	Data *shared.ProjectResponse `json:"data,omitempty"`
}

type CreateProjectForTeamRequest struct {
	PathParams  CreateProjectForTeamPathParams
	QueryParams CreateProjectForTeamQueryParams
	Request     CreateProjectForTeamRequestBodyInput `request:"mediaType=application/json"`
}

type CreateProjectForTeamResponse struct {
	ContentType                                  string
	ErrorResponse                                *shared.ErrorResponse
	StatusCode                                   int64
	CreateProjectForTeam201ApplicationJSONObject *CreateProjectForTeam201ApplicationJSON
}
