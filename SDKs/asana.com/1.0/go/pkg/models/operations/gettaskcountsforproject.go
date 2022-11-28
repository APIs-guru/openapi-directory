package operations

import (
	"openapi/pkg/models/shared"
)

type GetTaskCountsForProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type GetTaskCountsForProjectQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetTaskCountsForProject200ApplicationJSON struct {
	Data *shared.TaskCountResponse `json:"data,omitempty"`
}

type GetTaskCountsForProjectRequest struct {
	PathParams  GetTaskCountsForProjectPathParams
	QueryParams GetTaskCountsForProjectQueryParams
}

type GetTaskCountsForProjectResponse struct {
	ContentType                                     string
	ErrorResponse                                   *shared.ErrorResponse
	StatusCode                                      int64
	GetTaskCountsForProject200ApplicationJSONObject *GetTaskCountsForProject200ApplicationJSON
}
