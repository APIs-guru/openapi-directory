package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteIntegrationLinkPathParams struct {
	EnvironmentID       string                         `pathParam:"style=simple,explode=false,name=environmentId"`
	IntegrationLinkType shared.IntegrationLinkTypeEnum `pathParam:"style=simple,explode=false,name=integrationLinkType"`
	Key                 string                         `pathParam:"style=simple,explode=false,name=key"`
	SettingID           int32                          `pathParam:"style=simple,explode=false,name=settingId"`
}

type DeleteIntegrationLinkRequest struct {
	PathParams DeleteIntegrationLinkPathParams
}

type DeleteIntegrationLinkResponse struct {
	ContentType                string
	DeleteIntegrationLinkModel *shared.DeleteIntegrationLinkModel
	StatusCode                 int64
}
