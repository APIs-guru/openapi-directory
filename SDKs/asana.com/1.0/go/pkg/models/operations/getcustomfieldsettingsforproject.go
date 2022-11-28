package operations

import (
	"openapi/pkg/models/shared"
)

type GetCustomFieldSettingsForProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type GetCustomFieldSettingsForProjectQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetCustomFieldSettingsForProject200ApplicationJSON struct {
	Data []shared.CustomFieldSettingResponse `json:"data,omitempty"`
}

type GetCustomFieldSettingsForProjectRequest struct {
	PathParams  GetCustomFieldSettingsForProjectPathParams
	QueryParams GetCustomFieldSettingsForProjectQueryParams
}

type GetCustomFieldSettingsForProjectResponse struct {
	ContentType                                              string
	ErrorResponse                                            *shared.ErrorResponse
	StatusCode                                               int64
	GetCustomFieldSettingsForProject200ApplicationJSONObject *GetCustomFieldSettingsForProject200ApplicationJSON
}
