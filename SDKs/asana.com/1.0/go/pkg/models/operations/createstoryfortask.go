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

type CreateStoryForTaskRequestBodyInput struct {
	Data *shared.StoryRequestInput `json:"data,omitempty"`
}

type CreateStoryForTask201ApplicationJSON struct {
	Data *shared.StoryResponse `json:"data,omitempty"`
}

type CreateStoryForTaskRequest struct {
	PathParams  CreateStoryForTaskPathParams
	QueryParams CreateStoryForTaskQueryParams
	Request     CreateStoryForTaskRequestBodyInput `request:"mediaType=application/json"`
}

type CreateStoryForTaskResponse struct {
	ContentType                                string
	ErrorResponse                              *shared.ErrorResponse
	StatusCode                                 int64
	CreateStoryForTask201ApplicationJSONObject *CreateStoryForTask201ApplicationJSON
}
