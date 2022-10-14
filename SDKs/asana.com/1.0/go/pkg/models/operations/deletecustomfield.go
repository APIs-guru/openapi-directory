package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCustomFieldPathParams struct {
	CustomFieldGid string `pathParam:"style=simple,explode=false,name=custom_field_gid"`
}

type DeleteCustomFieldQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type DeleteCustomFieldRequest struct {
	PathParams  DeleteCustomFieldPathParams
	QueryParams DeleteCustomFieldQueryParams
}

type DeleteCustomField200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type DeleteCustomFieldResponse struct {
	ContentType                               string
	ErrorResponse                             *shared.ErrorResponse
	StatusCode                                int64
	DeleteCustomField200ApplicationJSONObject *DeleteCustomField200ApplicationJSON
}
