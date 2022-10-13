package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamMembershipsQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
	Team      *string  `queryParam:"style=form,explode=true,name=team"`
	User      *string  `queryParam:"style=form,explode=true,name=user"`
	Workspace *string  `queryParam:"style=form,explode=true,name=workspace"`
}

type GetTeamMembershipsRequest struct {
	QueryParams GetTeamMembershipsQueryParams
}

type GetTeamMemberships200ApplicationJSON struct {
	Data []shared.TeamMembershipCompact `json:"data"`
}

type GetTeamMembershipsResponse struct {
	ContentType                                string
	ErrorResponse                              *shared.ErrorResponse
	StatusCode                                 int64
	GetTeamMemberships200ApplicationJSONObject *GetTeamMemberships200ApplicationJSON
}
