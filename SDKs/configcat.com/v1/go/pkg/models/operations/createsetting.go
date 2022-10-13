package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSettingPathParams struct {
	ConfigID string `pathParam:"style=simple,explode=false,name=configId"`
}

type CreateSettingRequests struct {
	CreateSettingModel  *shared.CreateSettingModel `request:"mediaType=application/*+json"`
	CreateSettingModel1 *shared.CreateSettingModel `request:"mediaType=application/json"`
	CreateSettingModel2 *shared.CreateSettingModel `request:"mediaType=text/json"`
}

type CreateSettingRequest struct {
	PathParams CreateSettingPathParams
	Request    CreateSettingRequests
}

type CreateSettingResponse struct {
	ContentType         string
	SettingModel        *shared.SettingModel
	SettingModelHaljson *shared.SettingModelHaljson
	StatusCode          int64
}
