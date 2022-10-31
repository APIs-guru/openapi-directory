package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAdPathParams struct {
	AdID       string `pathParam:"style=simple,explode=false,name=ad_id"`
	CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
}

type DeleteAdSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type DeleteAdRequest struct {
	PathParams DeleteAdPathParams
	Security   DeleteAdSecurity
}

type DeleteAdResponse struct {
	ContentType string
	StatusCode  int64
}
