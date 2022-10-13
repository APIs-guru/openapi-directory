package operations

import (
	"openapi/pkg/models/shared"
)

type AddMembersForProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type AddMembersForProjectQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type AddMembersForProjectRequestBody struct {
	Data *shared.AddMembersRequest `json:"data"`
}

type AddMembersForProjectRequest struct {
	PathParams  AddMembersForProjectPathParams
	QueryParams AddMembersForProjectQueryParams
	Request     AddMembersForProjectRequestBody `request:"mediaType=application/json"`
}

type AddMembersForProject200ApplicationJSON struct {
	Data map[string]interface{} `json:"data"`
}

type AddMembersForProjectResponse struct {
	ContentType                                  string
	ErrorResponse                                *shared.ErrorResponse
	StatusCode                                   int64
	AddMembersForProject200ApplicationJSONObject *AddMembersForProject200ApplicationJSON
}
