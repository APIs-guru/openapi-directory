package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGoalQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateGoalRequestBodyInput struct {
	Data *shared.GoalRequestInput `json:"data,omitempty"`
}

type CreateGoal201ApplicationJSON struct {
	Data *shared.GoalResponse `json:"data,omitempty"`
}

type CreateGoalRequest struct {
	QueryParams CreateGoalQueryParams
	Request     CreateGoalRequestBodyInput `request:"mediaType=application/json"`
}

type CreateGoalResponse struct {
	ContentType                        string
	ErrorResponse                      *shared.ErrorResponse
	StatusCode                         int64
	CreateGoal201ApplicationJSONObject *CreateGoal201ApplicationJSON
}
