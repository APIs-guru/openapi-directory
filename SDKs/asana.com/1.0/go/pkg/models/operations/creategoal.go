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

type CreateGoalRequestBody struct {
	Data *shared.GoalRequest `json:"data"`
}

type CreateGoalRequest struct {
	QueryParams CreateGoalQueryParams
	Request     CreateGoalRequestBody `request:"mediaType=application/json"`
}

type CreateGoal201ApplicationJSON struct {
	Data *shared.GoalResponse `json:"data"`
}

type CreateGoalResponse struct {
	ContentType                        string
	ErrorResponse                      *shared.ErrorResponse
	StatusCode                         int64
	CreateGoal201ApplicationJSONObject *CreateGoal201ApplicationJSON
}
