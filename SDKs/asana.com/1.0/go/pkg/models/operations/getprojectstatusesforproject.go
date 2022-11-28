package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectStatusesForProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type GetProjectStatusesForProjectQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetProjectStatusesForProject200ApplicationJSON struct {
	Data []shared.ProjectStatusCompact `json:"data,omitempty"`
}

type GetProjectStatusesForProjectRequest struct {
	PathParams  GetProjectStatusesForProjectPathParams
	QueryParams GetProjectStatusesForProjectQueryParams
}

type GetProjectStatusesForProjectResponse struct {
	ContentType                                          string
	ErrorResponse                                        *shared.ErrorResponse
	StatusCode                                           int64
	GetProjectStatusesForProject200ApplicationJSONObject *GetProjectStatusesForProject200ApplicationJSON
}
