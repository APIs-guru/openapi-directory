package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProjectStatusPathParams struct {
	ProjectStatusGid string `pathParam:"style=simple,explode=false,name=project_status_gid"`
}

type DeleteProjectStatusQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type DeleteProjectStatusRequest struct {
	PathParams  DeleteProjectStatusPathParams
	QueryParams DeleteProjectStatusQueryParams
}

type DeleteProjectStatus200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type DeleteProjectStatusResponse struct {
	ContentType                                 string
	ErrorResponse                               *shared.ErrorResponse
	StatusCode                                  int64
	DeleteProjectStatus200ApplicationJSONObject *DeleteProjectStatus200ApplicationJSON
}
