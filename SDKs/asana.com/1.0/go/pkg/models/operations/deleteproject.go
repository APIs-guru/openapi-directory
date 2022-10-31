package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type DeleteProjectQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type DeleteProjectRequest struct {
	PathParams  DeleteProjectPathParams
	QueryParams DeleteProjectQueryParams
}

type DeleteProject200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type DeleteProjectResponse struct {
	ContentType                           string
	ErrorResponse                         *shared.ErrorResponse
	StatusCode                            int64
	DeleteProject200ApplicationJSONObject *DeleteProject200ApplicationJSON
}
