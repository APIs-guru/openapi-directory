package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type DeleteTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type DeleteTaskRequest struct {
	PathParams  DeleteTaskPathParams
	QueryParams DeleteTaskQueryParams
}

type DeleteTask200ApplicationJSON struct {
	Data map[string]interface{} `json:"data"`
}

type DeleteTaskResponse struct {
	ContentType                        string
	ErrorResponse                      *shared.ErrorResponse
	StatusCode                         int64
	DeleteTask200ApplicationJSONObject *DeleteTask200ApplicationJSON
}
