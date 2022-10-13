package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStoryForTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type CreateStoryForTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateStoryForTaskRequestBody struct {
	Data *shared.StoryRequest `json:"data"`
}

type CreateStoryForTaskRequest struct {
	PathParams  CreateStoryForTaskPathParams
	QueryParams CreateStoryForTaskQueryParams
	Request     CreateStoryForTaskRequestBody `request:"mediaType=application/json"`
}

type CreateStoryForTask201ApplicationJSON struct {
	Data *shared.StoryResponse `json:"data"`
}

type CreateStoryForTaskResponse struct {
	ContentType                                string
	ErrorResponse                              *shared.ErrorResponse
	StatusCode                                 int64
	CreateStoryForTask201ApplicationJSONObject *CreateStoryForTask201ApplicationJSON
}
