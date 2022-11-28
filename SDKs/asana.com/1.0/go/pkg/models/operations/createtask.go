package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateTaskRequestBodyInput struct {
	Data *shared.TaskRequestInput `json:"data,omitempty"`
}

type CreateTask201ApplicationJSON struct {
	Data *shared.TaskResponse `json:"data,omitempty"`
}

type CreateTaskRequest struct {
	QueryParams CreateTaskQueryParams
	Request     CreateTaskRequestBodyInput `request:"mediaType=application/json"`
}

type CreateTaskResponse struct {
	ContentType                        string
	ErrorResponse                      *shared.ErrorResponse
	StatusCode                         int64
	CreateTask201ApplicationJSONObject *CreateTask201ApplicationJSON
}
