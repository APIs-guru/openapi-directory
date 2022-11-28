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

type UpdateTaskRequestBodyInput struct {
	Data *shared.TaskRequestInput `json:"data,omitempty"`
}

type UpdateTask200ApplicationJSON struct {
	Data *shared.TaskResponse `json:"data,omitempty"`
}

type UpdateTaskRequest struct {
	PathParams  UpdateTaskPathParams
	QueryParams UpdateTaskQueryParams
	Request     UpdateTaskRequestBodyInput `request:"mediaType=application/json"`
}

type UpdateTaskResponse struct {
	ContentType                        string
	ErrorResponse                      *shared.ErrorResponse
	StatusCode                         int64
	UpdateTask200ApplicationJSONObject *UpdateTask200ApplicationJSON
}
