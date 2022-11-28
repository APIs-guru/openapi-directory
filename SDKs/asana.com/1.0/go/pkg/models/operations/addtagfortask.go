package operations

import (
	"openapi/pkg/models/shared"
)

type AddTagForTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type AddTagForTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type AddTagForTaskRequestBody struct {
	Data *shared.TaskAddTagRequest `json:"data,omitempty"`
}

type AddTagForTask200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type AddTagForTaskRequest struct {
	PathParams  AddTagForTaskPathParams
	QueryParams AddTagForTaskQueryParams
	Request     AddTagForTaskRequestBody `request:"mediaType=application/json"`
}

type AddTagForTaskResponse struct {
	ContentType                           string
	ErrorResponse                         *shared.ErrorResponse
	StatusCode                            int64
	AddTagForTask200ApplicationJSONObject *AddTagForTask200ApplicationJSON
}
