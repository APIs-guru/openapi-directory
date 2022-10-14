package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveSubgoalPathParams struct {
	GoalGid string `pathParam:"style=simple,explode=false,name=goal_gid"`
}

type RemoveSubgoalQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type RemoveSubgoalRequestBody struct {
	Data *shared.GoalRemoveSubgoalRequest `json:"data,omitempty"`
}

type RemoveSubgoalRequest struct {
	PathParams  RemoveSubgoalPathParams
	QueryParams RemoveSubgoalQueryParams
	Request     RemoveSubgoalRequestBody `request:"mediaType=application/json"`
}

type RemoveSubgoal200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type RemoveSubgoalResponse struct {
	ContentType                           string
	ErrorResponse                         *shared.ErrorResponse
	StatusCode                            int64
	RemoveSubgoal200ApplicationJSONObject *RemoveSubgoal200ApplicationJSON
}
