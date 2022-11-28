package operations

import (
	"openapi/pkg/models/shared"
)

type SupportingWorkPathParams struct {
	GoalGid string `pathParam:"style=simple,explode=false,name=goal_gid"`
}

type SupportingWorkQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type SupportingWork200ApplicationJSON struct {
	Data []shared.ProjectCompact `json:"data,omitempty"`
}

type SupportingWorkRequest struct {
	PathParams  SupportingWorkPathParams
	QueryParams SupportingWorkQueryParams
}

type SupportingWorkResponse struct {
	ContentType                            string
	ErrorResponse                          *shared.ErrorResponse
	StatusCode                             int64
	SupportingWork200ApplicationJSONObject *SupportingWork200ApplicationJSON
}
