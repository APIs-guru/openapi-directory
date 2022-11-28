package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectsQueryParams struct {
	Archived  *bool    `queryParam:"style=form,explode=true,name=archived"`
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
	Team      *string  `queryParam:"style=form,explode=true,name=team"`
	Workspace *string  `queryParam:"style=form,explode=true,name=workspace"`
}

type GetProjects200ApplicationJSON struct {
	Data []shared.ProjectCompact `json:"data,omitempty"`
}

type GetProjectsRequest struct {
	QueryParams GetProjectsQueryParams
}

type GetProjectsResponse struct {
	ContentType                         string
	ErrorResponse                       *shared.ErrorResponse
	StatusCode                          int64
	GetProjects200ApplicationJSONObject *GetProjects200ApplicationJSON
}
