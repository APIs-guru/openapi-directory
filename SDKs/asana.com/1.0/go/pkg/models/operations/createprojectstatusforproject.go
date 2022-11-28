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

type CreateProjectStatusForProjectRequestBodyInput struct {
	Data *shared.ProjectStatusRequestInput `json:"data,omitempty"`
}

type CreateProjectStatusForProject201ApplicationJSON struct {
	Data *shared.ProjectStatusResponse `json:"data,omitempty"`
}

type CreateProjectStatusForProjectRequest struct {
	PathParams  CreateProjectStatusForProjectPathParams
	QueryParams CreateProjectStatusForProjectQueryParams
	Request     CreateProjectStatusForProjectRequestBodyInput `request:"mediaType=application/json"`
}

type CreateProjectStatusForProjectResponse struct {
	ContentType                                           string
	ErrorResponse                                         *shared.ErrorResponse
	StatusCode                                            int64
	CreateProjectStatusForProject201ApplicationJSONObject *CreateProjectStatusForProject201ApplicationJSON
}
