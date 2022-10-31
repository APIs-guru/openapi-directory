package operations

import (
	"openapi/pkg/models/shared"
)

type EndCampaignPathParams struct {
	CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
}

type EndCampaignSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type EndCampaignRequest struct {
	PathParams EndCampaignPathParams
	Security   EndCampaignSecurity
}

type EndCampaignResponse struct {
	ContentType string
	StatusCode  int64
}
