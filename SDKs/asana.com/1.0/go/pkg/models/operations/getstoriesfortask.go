package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoriesForTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type GetStoriesForTaskQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetStoriesForTask200ApplicationJSON struct {
	Data *interface{} `json:"data,omitempty"`
}

type GetStoriesForTaskRequest struct {
	PathParams  GetStoriesForTaskPathParams
	QueryParams GetStoriesForTaskQueryParams
}

type GetStoriesForTaskResponse struct {
	ContentType                               string
	ErrorResponse                             *shared.ErrorResponse
	StatusCode                                int64
	GetStoriesForTask200ApplicationJSONObject *GetStoriesForTask200ApplicationJSON
}
