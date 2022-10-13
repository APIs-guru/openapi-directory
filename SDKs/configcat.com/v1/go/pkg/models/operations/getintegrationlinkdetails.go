package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationLinkDetailsPathParams struct {
	IntegrationLinkType shared.IntegrationLinkTypeEnum `pathParam:"style=simple,explode=false,name=integrationLinkType"`
	Key                 string                         `pathParam:"style=simple,explode=false,name=key"`
}

type GetIntegrationLinkDetailsRequest struct {
	PathParams GetIntegrationLinkDetailsPathParams
}

type GetIntegrationLinkDetailsResponse struct {
	ContentType                 string
	IntegrationLinkDetailsModel *shared.IntegrationLinkDetailsModel
	StatusCode                  int64
}
