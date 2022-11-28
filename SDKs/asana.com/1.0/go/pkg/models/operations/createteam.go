package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTeamQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateTeamRequestBodyInput struct {
	Data *shared.TeamRequestInput `json:"data,omitempty"`
}

type CreateTeam201ApplicationJSON struct {
	Data *shared.TeamResponse `json:"data,omitempty"`
}

type CreateTeamRequest struct {
	QueryParams CreateTeamQueryParams
	Request     CreateTeamRequestBodyInput `request:"mediaType=application/json"`
}

type CreateTeamResponse struct {
	ContentType                        string
	ErrorResponse                      *shared.ErrorResponse
	StatusCode                         int64
	CreateTeam201ApplicationJSONObject *CreateTeam201ApplicationJSON
}
