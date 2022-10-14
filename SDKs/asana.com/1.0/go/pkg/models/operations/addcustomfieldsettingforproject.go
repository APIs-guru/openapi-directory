package operations

import (
	"openapi/pkg/models/shared"
)

type AddCustomFieldSettingForProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type AddCustomFieldSettingForProjectQueryParams struct {
	OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type AddCustomFieldSettingForProjectRequestBody struct {
	Data *shared.AddCustomFieldSettingRequest `json:"data,omitempty"`
}

type AddCustomFieldSettingForProjectRequest struct {
	PathParams  AddCustomFieldSettingForProjectPathParams
	QueryParams AddCustomFieldSettingForProjectQueryParams
	Request     AddCustomFieldSettingForProjectRequestBody `request:"mediaType=application/json"`
}

type AddCustomFieldSettingForProject200ApplicationJSON struct {
	Data *shared.CustomFieldSettingResponse `json:"data,omitempty"`
}

type AddCustomFieldSettingForProjectResponse struct {
	ContentType                                             string
	ErrorResponse                                           *shared.ErrorResponse
	StatusCode                                              int64
	AddCustomFieldSettingForProject200ApplicationJSONObject *AddCustomFieldSettingForProject200ApplicationJSON
}
