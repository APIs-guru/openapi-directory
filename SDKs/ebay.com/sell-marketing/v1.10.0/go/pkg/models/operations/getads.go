package operations

import (
	"openapi/pkg/models/shared"
)

type GetAdsPathParams struct {
	CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
}

type GetAdsQueryParams struct {
	Limit      *string `queryParam:"style=form,explode=true,name=limit"`
	ListingIds *string `queryParam:"style=form,explode=true,name=listing_ids"`
	Offset     *string `queryParam:"style=form,explode=true,name=offset"`
}

type GetAdsSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetAdsRequest struct {
	PathParams  GetAdsPathParams
	QueryParams GetAdsQueryParams
	Security    GetAdsSecurity
}

type GetAdsResponse struct {
	AdPagedCollection *shared.AdPagedCollection
	ContentType       string
	StatusCode        int64
}
