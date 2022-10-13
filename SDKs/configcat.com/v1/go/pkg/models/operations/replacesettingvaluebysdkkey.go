package operations

import (
	"openapi/pkg/models/shared"
)

type ReplaceSettingValueBySdkkeyPathParams struct {
	SettingKeyOrID string `pathParam:"style=simple,explode=false,name=settingKeyOrId"`
}

type ReplaceSettingValueBySdkkeyQueryParams struct {
	Reason *string `queryParam:"style=form,explode=true,name=reason"`
}

type ReplaceSettingValueBySdkkeyHeaders struct {
	XConfigcatSdkkey string `header:"name=X-CONFIGCAT-SDKKEY"`
}

type ReplaceSettingValueBySdkkeyRequests struct {
	UpdateSettingValueModel  *shared.UpdateSettingValueModel `request:"mediaType=application/*+json"`
	UpdateSettingValueModel1 *shared.UpdateSettingValueModel `request:"mediaType=application/json"`
	UpdateSettingValueModel2 *shared.UpdateSettingValueModel `request:"mediaType=text/json"`
}

type ReplaceSettingValueBySdkkeyRequest struct {
	PathParams  ReplaceSettingValueBySdkkeyPathParams
	QueryParams ReplaceSettingValueBySdkkeyQueryParams
	Headers     ReplaceSettingValueBySdkkeyHeaders
	Request     ReplaceSettingValueBySdkkeyRequests
}

type ReplaceSettingValueBySdkkeyResponse struct {
	ContentType              string
	SettingValueModel        *shared.SettingValueModel
	SettingValueModelHaljson *shared.SettingValueModelHaljson
	StatusCode               int64
}
