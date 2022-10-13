package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSubtaskForTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type CreateSubtaskForTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateSubtaskForTaskRequestBody struct {
	Data *shared.TaskRequest `json:"data"`
}

type CreateSubtaskForTaskRequest struct {
	PathParams  CreateSubtaskForTaskPathParams
	QueryParams CreateSubtaskForTaskQueryParams
	Request     CreateSubtaskForTaskRequestBody `request:"mediaType=application/json"`
}

type CreateSubtaskForTask201ApplicationJSON struct {
	Data *shared.TaskResponse `json:"data"`
}

type CreateSubtaskForTaskResponse struct {
	ContentType                                  string
	ErrorResponse                                *shared.ErrorResponse
	StatusCode                                   int64
	CreateSubtaskForTask201ApplicationJSONObject *CreateSubtaskForTask201ApplicationJSON
}
