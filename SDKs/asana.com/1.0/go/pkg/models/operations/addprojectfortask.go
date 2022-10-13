package operations

import (
	"openapi/pkg/models/shared"
)

type AddProjectForTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type AddProjectForTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type AddProjectForTaskRequestBody struct {
	Data *shared.TaskAddProjectRequest `json:"data"`
}

type AddProjectForTaskRequest struct {
	PathParams  AddProjectForTaskPathParams
	QueryParams AddProjectForTaskQueryParams
	Request     AddProjectForTaskRequestBody `request:"mediaType=application/json"`
}

type AddProjectForTask200ApplicationJSON struct {
	Data map[string]interface{} `json:"data"`
}

type AddProjectForTaskResponse struct {
	ContentType                               string
	ErrorResponse                             *shared.ErrorResponse
	StatusCode                                int64
	AddProjectForTask200ApplicationJSONObject *AddProjectForTask200ApplicationJSON
}
