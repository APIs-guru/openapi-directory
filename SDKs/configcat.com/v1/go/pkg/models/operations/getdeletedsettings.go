package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeletedSettingsPathParams struct {
	ConfigID string `pathParam:"style=simple,explode=false,name=configId"`
}

type GetDeletedSettingsRequest struct {
	PathParams GetDeletedSettingsPathParams
}

type GetDeletedSettingsResponse struct {
	ContentType          string
	SettingModelHaljsons []shared.SettingModelHaljson
	SettingModels        []shared.SettingModel
	StatusCode           int64
}
