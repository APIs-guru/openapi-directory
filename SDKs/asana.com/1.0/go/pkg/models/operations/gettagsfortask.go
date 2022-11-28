package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsForTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type GetTagsForTaskQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetTagsForTask200ApplicationJSON struct {
	Data []shared.TagCompact `json:"data,omitempty"`
}

type GetTagsForTaskRequest struct {
	PathParams  GetTagsForTaskPathParams
	QueryParams GetTagsForTaskQueryParams
}

type GetTagsForTaskResponse struct {
	ContentType                            string
	ErrorResponse                          *shared.ErrorResponse
	StatusCode                             int64
	GetTagsForTask200ApplicationJSONObject *GetTagsForTask200ApplicationJSON
}
