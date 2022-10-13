package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBidPathParams struct {
	AdID       string `pathParam:"style=simple,explode=false,name=ad_id"`
	CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
}

type UpdateBidSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type UpdateBidRequest struct {
	PathParams UpdateBidPathParams
	Request    shared.UpdateBidPercentageRequest `request:"mediaType=application/json"`
	Security   UpdateBidSecurity
}

type UpdateBidResponse struct {
	ContentType string
	StatusCode  int64
}
