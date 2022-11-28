package operations

import (
	"openapi/pkg/models/shared"
)

type DuplicateProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type DuplicateProjectQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type DuplicateProjectRequestBody struct {
	Data *shared.ProjectDuplicateRequest `json:"data,omitempty"`
}

type DuplicateProject201ApplicationJSON struct {
	Data *shared.JobResponse `json:"data,omitempty"`
}

type DuplicateProjectRequest struct {
	PathParams  DuplicateProjectPathParams
	QueryParams DuplicateProjectQueryParams
	Request     *DuplicateProjectRequestBody `request:"mediaType=application/json"`
}

type DuplicateProjectResponse struct {
	ContentType                              string
	ErrorResponse                            *shared.ErrorResponse
	StatusCode                               int64
	DuplicateProject201ApplicationJSONObject *DuplicateProject201ApplicationJSON
}
