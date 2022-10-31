package operations

import (
	"openapi/pkg/models/shared"
)

type BulkUpdateAdsBidByListingIDPathParams struct {
	CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
}

type BulkUpdateAdsBidByListingIDSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type BulkUpdateAdsBidByListingIDRequest struct {
	PathParams BulkUpdateAdsBidByListingIDPathParams
	Request    shared.BulkCreateAdRequest `request:"mediaType=application/json"`
	Security   BulkUpdateAdsBidByListingIDSecurity
}

type BulkUpdateAdsBidByListingIDResponse struct {
	BulkAdResponse *shared.BulkAdResponse
	ContentType    string
	StatusCode     int64
}
