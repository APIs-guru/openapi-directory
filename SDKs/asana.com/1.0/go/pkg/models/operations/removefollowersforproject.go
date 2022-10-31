package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveFollowersForProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type RemoveFollowersForProjectQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type RemoveFollowersForProjectRequestBody struct {
	Data *shared.RemoveFollowersRequest `json:"data,omitempty"`
}

type RemoveFollowersForProjectRequest struct {
	PathParams  RemoveFollowersForProjectPathParams
	QueryParams RemoveFollowersForProjectQueryParams
	Request     RemoveFollowersForProjectRequestBody `request:"mediaType=application/json"`
}

type RemoveFollowersForProject200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type RemoveFollowersForProjectResponse struct {
	ContentType                                       string
	ErrorResponse                                     *shared.ErrorResponse
	StatusCode                                        int64
	RemoveFollowersForProject200ApplicationJSONObject *RemoveFollowersForProject200ApplicationJSON
}
