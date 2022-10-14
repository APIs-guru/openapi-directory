package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveFollowersPathParams struct {
	GoalGid string `pathParam:"style=simple,explode=false,name=goal_gid"`
}

type RemoveFollowersQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type RemoveFollowersRequestBody struct {
	Data *shared.TaskAddFollowersRequest `json:"data,omitempty"`
}

type RemoveFollowersRequest struct {
	PathParams  RemoveFollowersPathParams
	QueryParams RemoveFollowersQueryParams
	Request     RemoveFollowersRequestBody `request:"mediaType=application/json"`
}

type RemoveFollowers201ApplicationJSON struct {
	Data *shared.GoalResponse `json:"data,omitempty"`
}

type RemoveFollowersResponse struct {
	ContentType                             string
	ErrorResponse                           *shared.ErrorResponse
	StatusCode                              int64
	RemoveFollowers201ApplicationJSONObject *RemoveFollowers201ApplicationJSON
}
