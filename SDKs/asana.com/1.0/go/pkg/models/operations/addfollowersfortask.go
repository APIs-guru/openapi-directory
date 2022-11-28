package operations

import (
	"openapi/pkg/models/shared"
)

type AddFollowersForTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type AddFollowersForTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type AddFollowersForTaskRequestBody struct {
	Data *shared.TaskAddFollowersRequest `json:"data,omitempty"`
}

type AddFollowersForTask200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type AddFollowersForTaskRequest struct {
	PathParams  AddFollowersForTaskPathParams
	QueryParams AddFollowersForTaskQueryParams
	Request     AddFollowersForTaskRequestBody `request:"mediaType=application/json"`
}

type AddFollowersForTaskResponse struct {
	ContentType                                 string
	ErrorResponse                               *shared.ErrorResponse
	StatusCode                                  int64
	AddFollowersForTask200ApplicationJSONObject *AddFollowersForTask200ApplicationJSON
}
