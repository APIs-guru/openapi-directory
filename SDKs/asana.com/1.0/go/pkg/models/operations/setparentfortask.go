package operations

import (
	"openapi/pkg/models/shared"
)

type SetParentForTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type SetParentForTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type SetParentForTaskRequestBody struct {
	Data *shared.TaskSetParentRequest `json:"data,omitempty"`
}

type SetParentForTaskRequest struct {
	PathParams  SetParentForTaskPathParams
	QueryParams SetParentForTaskQueryParams
	Request     SetParentForTaskRequestBody `request:"mediaType=application/json"`
}

type SetParentForTask200ApplicationJSON struct {
	Data *shared.TaskResponse `json:"data,omitempty"`
}

type SetParentForTaskResponse struct {
	ContentType                              string
	ErrorResponse                            *shared.ErrorResponse
	StatusCode                               int64
	SetParentForTask200ApplicationJSONObject *SetParentForTask200ApplicationJSON
}
