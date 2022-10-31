package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCampaignPathParams struct {
	CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
}

type DeleteCampaignSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type DeleteCampaignRequest struct {
	PathParams DeleteCampaignPathParams
	Security   DeleteCampaignSecurity
}

type DeleteCampaignResponse struct {
	ContentType string
	StatusCode  int64
}
