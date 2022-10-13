package operations

import (
	"openapi/pkg/models/shared"
)

type FindListingRecommendationsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *string `queryParam:"style=form,explode=true,name=limit"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
}

type FindListingRecommendationsHeaders struct {
	XEbayCMarketplaceID string `header:"name=X-EBAY-C-MARKETPLACE-ID"`
}

type FindListingRecommendationsSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type FindListingRecommendationsRequest struct {
	QueryParams FindListingRecommendationsQueryParams
	Headers     FindListingRecommendationsHeaders
	Request     *shared.FindListingRecommendationRequest `request:"mediaType=application/json"`
	Security    FindListingRecommendationsSecurity
}

type FindListingRecommendationsResponse struct {
	ContentType                          string
	PagedListingRecommendationCollection *shared.PagedListingRecommendationCollection
	StatusCode                           int64
}
