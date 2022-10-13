package operations

import (
	"openapi/pkg/models/shared"
)

type GetCustomFieldPathParams struct {
	CustomFieldGid string `pathParam:"style=simple,explode=false,name=custom_field_gid"`
}

type GetCustomFieldQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetCustomFieldRequest struct {
	PathParams  GetCustomFieldPathParams
	QueryParams GetCustomFieldQueryParams
}

type GetCustomField200ApplicationJSON struct {
	Data *shared.CustomFieldResponse `json:"data"`
}

type GetCustomFieldResponse struct {
	ContentType                            string
	ErrorResponse                          *shared.ErrorResponse
	StatusCode                             int64
	GetCustomField200ApplicationJSONObject *GetCustomField200ApplicationJSON
}
