package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveMembersForProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type RemoveMembersForProjectQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type RemoveMembersForProjectRequestBody struct {
	Data *shared.RemoveMembersRequest `json:"data,omitempty"`
}

type RemoveMembersForProject200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type RemoveMembersForProjectRequest struct {
	PathParams  RemoveMembersForProjectPathParams
	QueryParams RemoveMembersForProjectQueryParams
	Request     RemoveMembersForProjectRequestBody `request:"mediaType=application/json"`
}

type RemoveMembersForProjectResponse struct {
	ContentType                                     string
	ErrorResponse                                   *shared.ErrorResponse
	StatusCode                                      int64
	RemoveMembersForProject200ApplicationJSONObject *RemoveMembersForProject200ApplicationJSON
}
