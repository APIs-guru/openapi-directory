package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAdsByInventoryReferencePathParams struct {
	CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
}

type DeleteAdsByInventoryReferenceSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type DeleteAdsByInventoryReferenceRequest struct {
	PathParams DeleteAdsByInventoryReferencePathParams
	Request    shared.DeleteAdsByInventoryReferenceRequest `request:"mediaType=application/json"`
	Security   DeleteAdsByInventoryReferenceSecurity
}

type DeleteAdsByInventoryReferenceResponse struct {
	AdIds       *shared.AdIds
	ContentType string
	StatusCode  int64
}
