package operations

import (
	"openapi/pkg/models/shared"
)

type GetTasksForSectionPathParams struct {
	SectionGid string `pathParam:"style=simple,explode=false,name=section_gid"`
}

type GetTasksForSectionQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetTasksForSection200ApplicationJSON struct {
	Data []shared.TaskCompact `json:"data,omitempty"`
}

type GetTasksForSectionRequest struct {
	PathParams  GetTasksForSectionPathParams
	QueryParams GetTasksForSectionQueryParams
}

type GetTasksForSectionResponse struct {
	ContentType                                string
	ErrorResponse                              *shared.ErrorResponse
	StatusCode                                 int64
	GetTasksForSection200ApplicationJSONObject *GetTasksForSection200ApplicationJSON
}
