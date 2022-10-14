package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveTagForTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type RemoveTagForTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type RemoveTagForTaskRequestBody struct {
	Data *shared.TaskRemoveTagRequest `json:"data,omitempty"`
}

type RemoveTagForTaskRequest struct {
	PathParams  RemoveTagForTaskPathParams
	QueryParams RemoveTagForTaskQueryParams
	Request     RemoveTagForTaskRequestBody `request:"mediaType=application/json"`
}

type RemoveTagForTask200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type RemoveTagForTaskResponse struct {
	ContentType                              string
	ErrorResponse                            *shared.ErrorResponse
	StatusCode                               int64
	RemoveTagForTask200ApplicationJSONObject *RemoveTagForTask200ApplicationJSON
}
