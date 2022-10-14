package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveCustomFieldSettingForProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type RemoveCustomFieldSettingForProjectQueryParams struct {
	OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type RemoveCustomFieldSettingForProjectRequestBody struct {
	Data *shared.RemoveCustomFieldSettingRequest `json:"data,omitempty"`
}

type RemoveCustomFieldSettingForProjectRequest struct {
	PathParams  RemoveCustomFieldSettingForProjectPathParams
	QueryParams RemoveCustomFieldSettingForProjectQueryParams
	Request     RemoveCustomFieldSettingForProjectRequestBody `request:"mediaType=application/json"`
}

type RemoveCustomFieldSettingForProject200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type RemoveCustomFieldSettingForProjectResponse struct {
	ContentType                                                string
	ErrorResponse                                              *shared.ErrorResponse
	StatusCode                                                 int64
	RemoveCustomFieldSettingForProject200ApplicationJSONObject *RemoveCustomFieldSettingForProject200ApplicationJSON
}
