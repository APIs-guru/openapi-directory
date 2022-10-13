package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSettingPathParams struct {
	SettingID int32 `pathParam:"style=simple,explode=false,name=settingId"`
}

type UpdateSettingRequests struct {
	Operations  []shared.Operation `request:"mediaType=application/*+json"`
	Operations1 []shared.Operation `request:"mediaType=application/json"`
	Operations2 []shared.Operation `request:"mediaType=application/json-patch+json"`
	Operations3 []shared.Operation `request:"mediaType=text/json"`
}

type UpdateSettingRequest struct {
	PathParams UpdateSettingPathParams
	Request    UpdateSettingRequests
}

type UpdateSettingResponse struct {
	ContentType         string
	SettingModel        *shared.SettingModel
	SettingModelHaljson *shared.SettingModelHaljson
	StatusCode          int64
}
