package operations

import (
	"openapi/pkg/models/shared"
)

type GetDependenciesForTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type GetDependenciesForTaskQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetDependenciesForTaskRequest struct {
	PathParams  GetDependenciesForTaskPathParams
	QueryParams GetDependenciesForTaskQueryParams
}

type GetDependenciesForTask200ApplicationJSON struct {
	Data []shared.TaskCompact `json:"data"`
}

type GetDependenciesForTaskResponse struct {
	ContentType                                    string
	ErrorResponse                                  *shared.ErrorResponse
	StatusCode                                     int64
	GetDependenciesForTask200ApplicationJSONObject *GetDependenciesForTask200ApplicationJSON
}
