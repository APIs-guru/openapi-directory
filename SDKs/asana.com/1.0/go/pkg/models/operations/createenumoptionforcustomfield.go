package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEnumOptionForCustomFieldPathParams struct {
	CustomFieldGid string `pathParam:"style=simple,explode=false,name=custom_field_gid"`
}

type CreateEnumOptionForCustomFieldQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateEnumOptionForCustomFieldRequestBody struct {
	Data *shared.EnumOptionRequest `json:"data,omitempty"`
}

type CreateEnumOptionForCustomFieldRequest struct {
	PathParams  CreateEnumOptionForCustomFieldPathParams
	QueryParams CreateEnumOptionForCustomFieldQueryParams
	Request     *CreateEnumOptionForCustomFieldRequestBody `request:"mediaType=application/json"`
}

type CreateEnumOptionForCustomField201ApplicationJSON struct {
	Data *shared.EnumOption `json:"data,omitempty"`
}

type CreateEnumOptionForCustomFieldResponse struct {
	ContentType                                            string
	ErrorResponse                                          *shared.ErrorResponse
	StatusCode                                             int64
	CreateEnumOptionForCustomField201ApplicationJSONObject *CreateEnumOptionForCustomField201ApplicationJSON
}
