package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGoalMetricPathParams struct {
	GoalGid string `pathParam:"style=simple,explode=false,name=goal_gid"`
}

type UpdateGoalMetricQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type UpdateGoalMetricRequestBody struct {
	Data *shared.GoalMetricCurrentValueRequest `json:"data,omitempty"`
}

type UpdateGoalMetricRequest struct {
	PathParams  UpdateGoalMetricPathParams
	QueryParams UpdateGoalMetricQueryParams
	Request     UpdateGoalMetricRequestBody `request:"mediaType=application/json"`
}

type UpdateGoalMetric200ApplicationJSON struct {
	Data *shared.GoalResponse `json:"data,omitempty"`
}

type UpdateGoalMetricResponse struct {
	ContentType                              string
	ErrorResponse                            *shared.ErrorResponse
	StatusCode                               int64
	UpdateGoalMetric200ApplicationJSONObject *UpdateGoalMetric200ApplicationJSON
}
