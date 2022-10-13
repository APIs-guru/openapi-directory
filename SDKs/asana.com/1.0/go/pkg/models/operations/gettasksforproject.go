package operations

import (
	"openapi/pkg/models/shared"
)

type GetTasksForProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type GetTasksForProjectQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetTasksForProjectRequest struct {
	PathParams  GetTasksForProjectPathParams
	QueryParams GetTasksForProjectQueryParams
}

type GetTasksForProject200ApplicationJSON struct {
	Data []shared.TaskCompact `json:"data"`
}

type GetTasksForProjectResponse struct {
	ContentType                                string
	ErrorResponse                              *shared.ErrorResponse
	StatusCode                                 int64
	GetTasksForProject200ApplicationJSONObject *GetTasksForProject200ApplicationJSON
}
