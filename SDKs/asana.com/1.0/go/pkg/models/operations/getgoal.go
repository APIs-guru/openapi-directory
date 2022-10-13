package operations

import (
	"openapi/pkg/models/shared"
)

type GetGoalPathParams struct {
	GoalGid string `pathParam:"style=simple,explode=false,name=goal_gid"`
}

type GetGoalQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetGoalRequest struct {
	PathParams  GetGoalPathParams
	QueryParams GetGoalQueryParams
}

type GetGoal200ApplicationJSON struct {
	Data *shared.GoalResponse `json:"data"`
}

type GetGoalResponse struct {
	ContentType                     string
	ErrorResponse                   *shared.ErrorResponse
	StatusCode                      int64
	GetGoal200ApplicationJSONObject *GetGoal200ApplicationJSON
}
