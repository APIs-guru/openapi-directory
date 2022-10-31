package operations

import (
	"openapi/pkg/models/shared"
)

type GetSettingPathParams struct {
	SettingID int32 `pathParam:"style=simple,explode=false,name=settingId"`
}

type GetSettingRequest struct {
	PathParams GetSettingPathParams
}

type GetSettingResponse struct {
	ContentType         string
	SettingModel        *shared.SettingModel
	SettingModelHaljson *shared.SettingModelHaljson
	StatusCode          int64
}
