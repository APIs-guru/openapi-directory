package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSettingValueBySdkkeyPathParams struct {
	SettingKeyOrID string `pathParam:"style=simple,explode=false,name=settingKeyOrId"`
}

type UpdateSettingValueBySdkkeyQueryParams struct {
	Reason *string `queryParam:"style=form,explode=true,name=reason"`
}

type UpdateSettingValueBySdkkeyHeaders struct {
	XConfigcatSdkkey string `header:"name=X-CONFIGCAT-SDKKEY"`
}

type UpdateSettingValueBySdkkeyRequests struct {
	Operations  []shared.Operation `request:"mediaType=application/*+json"`
	Operations1 []shared.Operation `request:"mediaType=application/json"`
	Operations2 []shared.Operation `request:"mediaType=application/json-patch+json"`
	Operations3 []shared.Operation `request:"mediaType=text/json"`
}

type UpdateSettingValueBySdkkeyRequest struct {
	PathParams  UpdateSettingValueBySdkkeyPathParams
	QueryParams UpdateSettingValueBySdkkeyQueryParams
	Headers     UpdateSettingValueBySdkkeyHeaders
	Request     UpdateSettingValueBySdkkeyRequests
}

type UpdateSettingValueBySdkkeyResponse struct {
	ContentType              string
	SettingValueModel        *shared.SettingValueModel
	SettingValueModelHaljson *shared.SettingValueModelHaljson
	StatusCode               int64
}
