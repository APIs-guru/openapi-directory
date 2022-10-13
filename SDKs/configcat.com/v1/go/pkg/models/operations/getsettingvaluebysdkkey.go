package operations

import (
	"openapi/pkg/models/shared"
)

type GetSettingValueBySdkkeyPathParams struct {
	SettingKeyOrID string `pathParam:"style=simple,explode=false,name=settingKeyOrId"`
}

type GetSettingValueBySdkkeyHeaders struct {
	XConfigcatSdkkey string `header:"name=X-CONFIGCAT-SDKKEY"`
}

type GetSettingValueBySdkkeyRequest struct {
	PathParams GetSettingValueBySdkkeyPathParams
	Headers    GetSettingValueBySdkkeyHeaders
}

type GetSettingValueBySdkkeyResponse struct {
	ContentType              string
	SettingValueModel        *shared.SettingValueModel
	SettingValueModelHaljson *shared.SettingValueModelHaljson
	StatusCode               int64
}
