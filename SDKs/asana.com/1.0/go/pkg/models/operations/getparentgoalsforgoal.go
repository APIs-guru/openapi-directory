package operations

import (
	"openapi/pkg/models/shared"
)

type GetParentGoalsForGoalPathParams struct {
	GoalGid string `pathParam:"style=simple,explode=false,name=goal_gid"`
}

type GetParentGoalsForGoalQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetParentGoalsForGoal200ApplicationJSON struct {
	Data []shared.GoalCompact `json:"data,omitempty"`
}

type GetParentGoalsForGoalRequest struct {
	PathParams  GetParentGoalsForGoalPathParams
	QueryParams GetParentGoalsForGoalQueryParams
}

type GetParentGoalsForGoalResponse struct {
	ContentType                                   string
	ErrorResponse                                 *shared.ErrorResponse
	StatusCode                                    int64
	GetParentGoalsForGoal200ApplicationJSONObject *GetParentGoalsForGoal200ApplicationJSON
}
