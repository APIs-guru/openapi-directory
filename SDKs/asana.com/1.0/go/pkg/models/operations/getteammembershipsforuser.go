package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamMembershipsForUserPathParams struct {
	UserGid string `pathParam:"style=simple,explode=false,name=user_gid"`
}

type GetTeamMembershipsForUserQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
	Workspace string   `queryParam:"style=form,explode=true,name=workspace"`
}

type GetTeamMembershipsForUser200ApplicationJSON struct {
	Data []shared.TeamMembershipCompact `json:"data,omitempty"`
}

type GetTeamMembershipsForUserRequest struct {
	PathParams  GetTeamMembershipsForUserPathParams
	QueryParams GetTeamMembershipsForUserQueryParams
}

type GetTeamMembershipsForUserResponse struct {
	ContentType                                       string
	ErrorResponse                                     *shared.ErrorResponse
	StatusCode                                        int64
	GetTeamMembershipsForUser200ApplicationJSONObject *GetTeamMembershipsForUser200ApplicationJSON
}
