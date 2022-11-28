package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProjectQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateProjectRequestBodyInput struct {
	Data *shared.ProjectRequestInput `json:"data,omitempty"`
}

type CreateProject201ApplicationJSON struct {
	Data *shared.ProjectResponse `json:"data,omitempty"`
}

type CreateProjectRequest struct {
	QueryParams CreateProjectQueryParams
	Request     CreateProjectRequestBodyInput `request:"mediaType=application/json"`
}

type CreateProjectResponse struct {
	ContentType                           string
	ErrorResponse                         *shared.ErrorResponse
	StatusCode                            int64
	CreateProject201ApplicationJSONObject *CreateProject201ApplicationJSON
}
