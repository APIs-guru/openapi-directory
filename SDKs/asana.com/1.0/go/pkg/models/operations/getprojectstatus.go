package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectStatusPathParams struct {
	ProjectStatusGid string `pathParam:"style=simple,explode=false,name=project_status_gid"`
}

type GetProjectStatusQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetProjectStatusRequest struct {
	PathParams  GetProjectStatusPathParams
	QueryParams GetProjectStatusQueryParams
}

type GetProjectStatus200ApplicationJSON struct {
	Data *shared.ProjectStatusResponse `json:"data,omitempty"`
}

type GetProjectStatusResponse struct {
	ContentType                              string
	ErrorResponse                            *shared.ErrorResponse
	StatusCode                               int64
	GetProjectStatus200ApplicationJSONObject *GetProjectStatus200ApplicationJSON
}
