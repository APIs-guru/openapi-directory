package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type UpdateProjectQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type UpdateProjectRequestBody struct {
	Data *shared.ProjectRequest `json:"data"`
}

type UpdateProjectRequest struct {
	PathParams  UpdateProjectPathParams
	QueryParams UpdateProjectQueryParams
	Request     UpdateProjectRequestBody `request:"mediaType=application/json"`
}

type UpdateProject200ApplicationJSON struct {
	Data *shared.ProjectResponse `json:"data"`
}

type UpdateProjectResponse struct {
	ContentType                           string
	ErrorResponse                         *shared.ErrorResponse
	StatusCode                            int64
	UpdateProject200ApplicationJSONObject *UpdateProject200ApplicationJSON
}
