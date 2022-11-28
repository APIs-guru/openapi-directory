package operations

import (
	"openapi/pkg/models/shared"
)

type InsertEnumOptionForCustomFieldPathParams struct {
	CustomFieldGid string `pathParam:"style=simple,explode=false,name=custom_field_gid"`
}

type InsertEnumOptionForCustomFieldQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type InsertEnumOptionForCustomFieldRequestBody struct {
	Data *shared.EnumOptionInsertRequest `json:"data,omitempty"`
}

type InsertEnumOptionForCustomField200ApplicationJSON struct {
	Data *shared.EnumOption `json:"data,omitempty"`
}

type InsertEnumOptionForCustomFieldRequest struct {
	PathParams  InsertEnumOptionForCustomFieldPathParams
	QueryParams InsertEnumOptionForCustomFieldQueryParams
	Request     *InsertEnumOptionForCustomFieldRequestBody `request:"mediaType=application/json"`
}

type InsertEnumOptionForCustomFieldResponse struct {
	ContentType                                            string
	ErrorResponse                                          *shared.ErrorResponse
	StatusCode                                             int64
	InsertEnumOptionForCustomField200ApplicationJSONObject *InsertEnumOptionForCustomField200ApplicationJSON
}
