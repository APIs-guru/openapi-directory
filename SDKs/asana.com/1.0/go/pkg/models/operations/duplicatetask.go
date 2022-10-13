package operations

import (
	"openapi/pkg/models/shared"
)

type DuplicateTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type DuplicateTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type DuplicateTaskRequestBody struct {
	Data *shared.TaskDuplicateRequest `json:"data"`
}

type DuplicateTaskRequest struct {
	PathParams  DuplicateTaskPathParams
	QueryParams DuplicateTaskQueryParams
	Request     DuplicateTaskRequestBody `request:"mediaType=application/json"`
}

type DuplicateTask201ApplicationJSON struct {
	Data *shared.JobResponse `json:"data"`
}

type DuplicateTaskResponse struct {
	ContentType                           string
	ErrorResponse                         *shared.ErrorResponse
	StatusCode                            int64
	DuplicateTask201ApplicationJSONObject *DuplicateTask201ApplicationJSON
}
