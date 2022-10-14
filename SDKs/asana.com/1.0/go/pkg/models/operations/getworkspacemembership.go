package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspaceMembershipPathParams struct {
	WorkspaceMembershipGid string `pathParam:"style=simple,explode=false,name=workspace_membership_gid"`
}

type GetWorkspaceMembershipQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetWorkspaceMembershipRequest struct {
	PathParams  GetWorkspaceMembershipPathParams
	QueryParams GetWorkspaceMembershipQueryParams
}

type GetWorkspaceMembership200ApplicationJSON struct {
	Data *shared.WorkspaceMembershipResponse `json:"data,omitempty"`
}

type GetWorkspaceMembershipResponse struct {
	ContentType                                    string
	ErrorResponse                                  *shared.ErrorResponse
	StatusCode                                     int64
	GetWorkspaceMembership200ApplicationJSONObject *GetWorkspaceMembership200ApplicationJSON
}
