package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGoalPathParams struct {
	GoalGid string `pathParam:"style=simple,explode=false,name=goal_gid"`
}

type DeleteGoalQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type DeleteGoalRequest struct {
	PathParams  DeleteGoalPathParams
	QueryParams DeleteGoalQueryParams
}

type DeleteGoal200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type DeleteGoalResponse struct {
	ContentType                        string
	ErrorResponse                      *shared.ErrorResponse
	StatusCode                         int64
	DeleteGoal200ApplicationJSONObject *DeleteGoal200ApplicationJSON
}
