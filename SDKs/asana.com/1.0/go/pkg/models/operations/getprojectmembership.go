package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectMembershipPathParams struct {
	ProjectMembershipGid string `pathParam:"style=simple,explode=false,name=project_membership_gid"`
}

type GetProjectMembershipQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetProjectMembership200ApplicationJSON struct {
	Data *shared.ProjectMembershipResponse `json:"data,omitempty"`
}

type GetProjectMembershipRequest struct {
	PathParams  GetProjectMembershipPathParams
	QueryParams GetProjectMembershipQueryParams
}

type GetProjectMembershipResponse struct {
	ContentType                                  string
	ErrorResponse                                *shared.ErrorResponse
	StatusCode                                   int64
	GetProjectMembership200ApplicationJSONObject *GetProjectMembership200ApplicationJSON
}
