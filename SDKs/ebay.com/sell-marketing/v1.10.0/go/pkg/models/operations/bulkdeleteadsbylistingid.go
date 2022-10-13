package operations

import (
	"openapi/pkg/models/shared"
)

type BulkDeleteAdsByListingIDPathParams struct {
	CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
}

type BulkDeleteAdsByListingIDSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type BulkDeleteAdsByListingIDRequest struct {
	PathParams BulkDeleteAdsByListingIDPathParams
	Request    shared.BulkDeleteAdRequest `request:"mediaType=application/json"`
	Security   BulkDeleteAdsByListingIDSecurity
}

type BulkDeleteAdsByListingIDResponse struct {
	BulkDeleteAdResponse *shared.BulkDeleteAdResponse
	ContentType          string
	StatusCode           int64
}
