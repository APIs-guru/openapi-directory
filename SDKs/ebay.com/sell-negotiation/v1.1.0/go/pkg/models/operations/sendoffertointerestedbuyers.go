package operations

import (
	"openapi/pkg/models/shared"
)

type SendOfferToInterestedBuyersHeaders struct {
	XEbayCMarketplaceID string `header:"name=X-EBAY-C-MARKETPLACE-ID"`
}

type SendOfferToInterestedBuyersSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type SendOfferToInterestedBuyersRequest struct {
	Headers  SendOfferToInterestedBuyersHeaders
	Request  *shared.CreateOffersRequest `request:"mediaType=application/json"`
	Security SendOfferToInterestedBuyersSecurity
}

type SendOfferToInterestedBuyersResponse struct {
	ContentType                                   string
	SendOfferToInterestedBuyersCollectionResponse *shared.SendOfferToInterestedBuyersCollectionResponse
	StatusCode                                    int64
}
