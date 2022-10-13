package operations

import (
	"openapi/pkg/models/shared"
)

type GetServerFollowersQueryParams struct {
	ActorType *shared.ActorTypeEnum   `queryParam:"style=form,explode=true,name=actorType"`
	Count     *int64                  `queryParam:"style=form,explode=true,name=count"`
	Sort      *string                 `queryParam:"style=form,explode=true,name=sort"`
	Start     *int64                  `queryParam:"style=form,explode=true,name=start"`
	State     *shared.FollowStateEnum `queryParam:"style=form,explode=true,name=state"`
}

type GetServerFollowersRequest struct {
	QueryParams GetServerFollowersQueryParams
}

type GetServerFollowers200ApplicationJSON struct {
	Data  []interface{} `json:"data"`
	Total *int64        `json:"total"`
}

type GetServerFollowersResponse struct {
	ContentType                                string
	GetServerFollowers200ApplicationJSONObject *GetServerFollowers200ApplicationJSON
	StatusCode                                 int64
}
