package operations

import (
	"openapi/pkg/models/shared"
)

type AddFollowersForProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type AddFollowersForProjectQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type AddFollowersForProjectRequestBody struct {
	Data *shared.AddFollowersRequest `json:"data"`
}

type AddFollowersForProjectRequest struct {
	PathParams  AddFollowersForProjectPathParams
	QueryParams AddFollowersForProjectQueryParams
	Request     AddFollowersForProjectRequestBody `request:"mediaType=application/json"`
}

type AddFollowersForProject200ApplicationJSON struct {
	Data map[string]interface{} `json:"data"`
}

type AddFollowersForProjectResponse struct {
	ContentType                                    string
	ErrorResponse                                  *shared.ErrorResponse
	StatusCode                                     int64
	AddFollowersForProject200ApplicationJSONObject *AddFollowersForProject200ApplicationJSON
}
