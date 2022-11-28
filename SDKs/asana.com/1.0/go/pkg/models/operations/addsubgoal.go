package operations

import (
	"openapi/pkg/models/shared"
)

type AddSubgoalPathParams struct {
	GoalGid string `pathParam:"style=simple,explode=false,name=goal_gid"`
}

type AddSubgoalQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type AddSubgoalRequestBody struct {
	Data *shared.GoalAddSubgoalRequest `json:"data,omitempty"`
}

type AddSubgoal200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type AddSubgoalRequest struct {
	PathParams  AddSubgoalPathParams
	QueryParams AddSubgoalQueryParams
	Request     AddSubgoalRequestBody `request:"mediaType=application/json"`
}

type AddSubgoalResponse struct {
	ContentType                        string
	ErrorResponse                      *shared.ErrorResponse
	StatusCode                         int64
	AddSubgoal200ApplicationJSONObject *AddSubgoal200ApplicationJSON
}
