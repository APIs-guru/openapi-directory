package operations

import (
	"openapi/pkg/models/shared"
)

type AddFollowersPathParams struct {
	GoalGid string `pathParam:"style=simple,explode=false,name=goal_gid"`
}

type AddFollowersQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type AddFollowersRequestBody struct {
	Data *shared.TaskAddFollowersRequest `json:"data"`
}

type AddFollowersRequest struct {
	PathParams  AddFollowersPathParams
	QueryParams AddFollowersQueryParams
	Request     AddFollowersRequestBody `request:"mediaType=application/json"`
}

type AddFollowers201ApplicationJSON struct {
	Data *shared.GoalResponse `json:"data"`
}

type AddFollowersResponse struct {
	ContentType                          string
	ErrorResponse                        *shared.ErrorResponse
	StatusCode                           int64
	AddFollowers201ApplicationJSONObject *AddFollowers201ApplicationJSON
}
