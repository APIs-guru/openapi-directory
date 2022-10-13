package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProjectStatusForProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type CreateProjectStatusForProjectQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateProjectStatusForProjectRequestBody struct {
	Data *shared.ProjectStatusRequest `json:"data"`
}

type CreateProjectStatusForProjectRequest struct {
	PathParams  CreateProjectStatusForProjectPathParams
	QueryParams CreateProjectStatusForProjectQueryParams
	Request     CreateProjectStatusForProjectRequestBody `request:"mediaType=application/json"`
}

type CreateProjectStatusForProject201ApplicationJSON struct {
	Data *shared.ProjectStatusResponse `json:"data"`
}

type CreateProjectStatusForProjectResponse struct {
	ContentType                                           string
	ErrorResponse                                         *shared.ErrorResponse
	StatusCode                                            int64
	CreateProjectStatusForProject201ApplicationJSONObject *CreateProjectStatusForProject201ApplicationJSON
}
