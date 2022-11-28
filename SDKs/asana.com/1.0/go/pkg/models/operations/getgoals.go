package operations

import (
	"openapi/pkg/models/shared"
)

type GetGoalsQueryParams struct {
	IsWorkspaceLevel *bool    `queryParam:"style=form,explode=true,name=is_workspace_level"`
	Limit            *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset           *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields        []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty        *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
	Portfolio        *string  `queryParam:"style=form,explode=true,name=portfolio"`
	Project          *string  `queryParam:"style=form,explode=true,name=project"`
	Team             *string  `queryParam:"style=form,explode=true,name=team"`
	TimePeriods      []string `queryParam:"style=form,explode=true,name=time_periods"`
	Workspace        *string  `queryParam:"style=form,explode=true,name=workspace"`
}

type GetGoals200ApplicationJSON struct {
	Data []shared.GoalCompact `json:"data,omitempty"`
}

type GetGoalsRequest struct {
	QueryParams GetGoalsQueryParams
}

type GetGoalsResponse struct {
	ContentType                      string
	ErrorResponse                    *shared.ErrorResponse
	StatusCode                       int64
	GetGoals200ApplicationJSONObject *GetGoals200ApplicationJSON
}
