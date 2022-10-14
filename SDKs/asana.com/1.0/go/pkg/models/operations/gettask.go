package operations

import (
	"openapi/pkg/models/shared"
)

type GetTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type GetTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetTaskRequest struct {
	PathParams  GetTaskPathParams
	QueryParams GetTaskQueryParams
}

type GetTask200ApplicationJSON struct {
	Data *shared.TaskResponse `json:"data,omitempty"`
}

type GetTaskResponse struct {
	ContentType                     string
	ErrorResponse                   *shared.ErrorResponse
	StatusCode                      int64
	GetTask200ApplicationJSONObject *GetTask200ApplicationJSON
}
