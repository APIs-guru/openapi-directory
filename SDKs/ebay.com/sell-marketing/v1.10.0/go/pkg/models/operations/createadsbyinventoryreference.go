package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAdsByInventoryReferencePathParams struct {
	CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
}

type CreateAdsByInventoryReferenceSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type CreateAdsByInventoryReferenceRequest struct {
	PathParams CreateAdsByInventoryReferencePathParams
	Request    shared.CreateAdsByInventoryReferenceRequest `request:"mediaType=application/json"`
	Security   CreateAdsByInventoryReferenceSecurity
}

type CreateAdsByInventoryReferenceResponse struct {
	AdReferences *shared.AdReferences
	ContentType  string
	StatusCode   int64
}
