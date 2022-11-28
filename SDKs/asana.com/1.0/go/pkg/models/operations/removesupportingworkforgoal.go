package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveSupportingWorkForGoalPathParams struct {
	GoalGid string `pathParam:"style=simple,explode=false,name=goal_gid"`
}

type RemoveSupportingWorkForGoalQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type RemoveSupportingWorkForGoalRequestBody struct {
	Data *shared.GoalAddSupportingWorkRequest `json:"data,omitempty"`
}

type RemoveSupportingWorkForGoal200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type RemoveSupportingWorkForGoalRequest struct {
	PathParams  RemoveSupportingWorkForGoalPathParams
	QueryParams RemoveSupportingWorkForGoalQueryParams
	Request     RemoveSupportingWorkForGoalRequestBody `request:"mediaType=application/json"`
}

type RemoveSupportingWorkForGoalResponse struct {
	ContentType                                         string
	ErrorResponse                                       *shared.ErrorResponse
	StatusCode                                          int64
	RemoveSupportingWorkForGoal200ApplicationJSONObject *RemoveSupportingWorkForGoal200ApplicationJSON
}
