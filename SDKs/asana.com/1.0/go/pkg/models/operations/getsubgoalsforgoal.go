package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubgoalsForGoalPathParams struct {
	GoalGid string `pathParam:"style=simple,explode=false,name=goal_gid"`
}

type GetSubgoalsForGoalQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetSubgoalsForGoalRequest struct {
	PathParams  GetSubgoalsForGoalPathParams
	QueryParams GetSubgoalsForGoalQueryParams
}

type GetSubgoalsForGoal200ApplicationJSON struct {
	Data []shared.GoalCompact `json:"data,omitempty"`
}

type GetSubgoalsForGoalResponse struct {
	ContentType                                string
	ErrorResponse                              *shared.ErrorResponse
	StatusCode                                 int64
	GetSubgoalsForGoal200ApplicationJSONObject *GetSubgoalsForGoal200ApplicationJSON
}
