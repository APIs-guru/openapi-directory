package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectMembershipsForProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type GetProjectMembershipsForProjectQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
	User      *string  `queryParam:"style=form,explode=true,name=user"`
}

type GetProjectMembershipsForProject200ApplicationJSON struct {
	Data []shared.ProjectMembershipCompact `json:"data,omitempty"`
}

type GetProjectMembershipsForProjectRequest struct {
	PathParams  GetProjectMembershipsForProjectPathParams
	QueryParams GetProjectMembershipsForProjectQueryParams
}

type GetProjectMembershipsForProjectResponse struct {
	ContentType                                             string
	ErrorResponse                                           *shared.ErrorResponse
	StatusCode                                              int64
	GetProjectMembershipsForProject200ApplicationJSONObject *GetProjectMembershipsForProject200ApplicationJSON
}
