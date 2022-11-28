package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGoalMetricPathParams struct {
	GoalGid string `pathParam:"style=simple,explode=false,name=goal_gid"`
}

type CreateGoalMetricQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateGoalMetricRequestBodyInput struct {
	Data *shared.GoalMetricRequestInput `json:"data,omitempty"`
}

type CreateGoalMetric200ApplicationJSON struct {
	Data *shared.GoalResponse `json:"data,omitempty"`
}

type CreateGoalMetricRequest struct {
	PathParams  CreateGoalMetricPathParams
	QueryParams CreateGoalMetricQueryParams
	Request     CreateGoalMetricRequestBodyInput `request:"mediaType=application/json"`
}

type CreateGoalMetricResponse struct {
	ContentType                              string
	ErrorResponse                            *shared.ErrorResponse
	StatusCode                               int64
	CreateGoalMetric200ApplicationJSONObject *CreateGoalMetric200ApplicationJSON
}
