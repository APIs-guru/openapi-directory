package operations

import (
	"openapi/pkg/models/shared"
)

type AddOrUpdateIntegrationLinkPathParams struct {
	EnvironmentID       string                         `pathParam:"style=simple,explode=false,name=environmentId"`
	IntegrationLinkType shared.IntegrationLinkTypeEnum `pathParam:"style=simple,explode=false,name=integrationLinkType"`
	Key                 string                         `pathParam:"style=simple,explode=false,name=key"`
	SettingID           int32                          `pathParam:"style=simple,explode=false,name=settingId"`
}

type AddOrUpdateIntegrationLinkRequests struct {
	AddOrUpdateIntegrationLinkModel  *shared.AddOrUpdateIntegrationLinkModel `request:"mediaType=application/*+json"`
	AddOrUpdateIntegrationLinkModel1 *shared.AddOrUpdateIntegrationLinkModel `request:"mediaType=application/json"`
	AddOrUpdateIntegrationLinkModel2 *shared.AddOrUpdateIntegrationLinkModel `request:"mediaType=text/json"`
}

type AddOrUpdateIntegrationLinkRequest struct {
	PathParams AddOrUpdateIntegrationLinkPathParams
	Request    *AddOrUpdateIntegrationLinkRequests
}

type AddOrUpdateIntegrationLinkResponse struct {
	ContentType          string
	IntegrationLinkModel *shared.IntegrationLinkModel
	StatusCode           int64
}
