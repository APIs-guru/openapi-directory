package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspaceMembershipsForUserPathParams struct {
	UserGid string `pathParam:"style=simple,explode=false,name=user_gid"`
}

type GetWorkspaceMembershipsForUserQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetWorkspaceMembershipsForUser200ApplicationJSON struct {
	Data []shared.WorkspaceMembershipCompact `json:"data,omitempty"`
}

type GetWorkspaceMembershipsForUserRequest struct {
	PathParams  GetWorkspaceMembershipsForUserPathParams
	QueryParams GetWorkspaceMembershipsForUserQueryParams
}

type GetWorkspaceMembershipsForUserResponse struct {
	ContentType                                            string
	ErrorResponse                                          *shared.ErrorResponse
	StatusCode                                             int64
	GetWorkspaceMembershipsForUser200ApplicationJSONObject *GetWorkspaceMembershipsForUser200ApplicationJSON
}
