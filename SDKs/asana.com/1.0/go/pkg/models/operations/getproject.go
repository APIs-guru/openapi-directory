package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type GetProjectQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetProject200ApplicationJSON struct {
	Data *shared.ProjectResponse `json:"data,omitempty"`
}

type GetProjectRequest struct {
	PathParams  GetProjectPathParams
	QueryParams GetProjectQueryParams
}

type GetProjectResponse struct {
	ContentType                        string
	ErrorResponse                      *shared.ErrorResponse
	StatusCode                         int64
	GetProject200ApplicationJSONObject *GetProject200ApplicationJSON
}
