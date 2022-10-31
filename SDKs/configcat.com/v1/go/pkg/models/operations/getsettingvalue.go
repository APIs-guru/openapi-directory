package operations

import (
	"openapi/pkg/models/shared"
)

type GetSettingValuePathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
	SettingID     int32  `pathParam:"style=simple,explode=false,name=settingId"`
}

type GetSettingValueRequest struct {
	PathParams GetSettingValuePathParams
}

type GetSettingValueResponse struct {
	ContentType              string
	SettingValueModel        *shared.SettingValueModel
	SettingValueModelHaljson *shared.SettingValueModelHaljson
	StatusCode               int64
}
