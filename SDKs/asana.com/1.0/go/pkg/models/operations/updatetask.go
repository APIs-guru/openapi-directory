package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type UpdateTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type UpdateTaskRequestBody struct {
	Data *shared.TaskRequest `json:"data"`
}

type UpdateTaskRequest struct {
	PathParams  UpdateTaskPathParams
	QueryParams UpdateTaskQueryParams
	Request     UpdateTaskRequestBody `request:"mediaType=application/json"`
}

type UpdateTask200ApplicationJSON struct {
	Data *shared.TaskResponse `json:"data"`
}

type UpdateTaskResponse struct {
	ContentType                        string
	ErrorResponse                      *shared.ErrorResponse
	StatusCode                         int64
	UpdateTask200ApplicationJSONObject *UpdateTask200ApplicationJSON
}
