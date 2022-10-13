package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCampaignIdentificationPathParams struct {
	CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
}

type UpdateCampaignIdentificationSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type UpdateCampaignIdentificationRequest struct {
	PathParams UpdateCampaignIdentificationPathParams
	Request    shared.UpdateCampaignIdentificationRequest `request:"mediaType=application/json"`
	Security   UpdateCampaignIdentificationSecurity
}

type UpdateCampaignIdentificationResponse struct {
	ContentType string
	StatusCode  int64
}
