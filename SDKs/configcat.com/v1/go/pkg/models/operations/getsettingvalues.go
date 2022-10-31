package operations

import (
	"openapi/pkg/models/shared"
)

type GetSettingValuesPathParams struct {
	ConfigID      string `pathParam:"style=simple,explode=false,name=configId"`
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type GetSettingValuesRequest struct {
	PathParams GetSettingValuesPathParams
}

type GetSettingValuesResponse struct {
	ConfigSettingValuesModel *shared.ConfigSettingValuesModel
	ContentType              string
	StatusCode               int64
}
