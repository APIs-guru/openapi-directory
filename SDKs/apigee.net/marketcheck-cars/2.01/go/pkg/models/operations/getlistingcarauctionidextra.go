package operations

import (
	"openapi/pkg/models/shared"
)

type GetListingCarAuctionIDExtraPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetListingCarAuctionIDExtraQueryParams struct {
	APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
}

type GetListingCarAuctionIDExtraRequest struct {
	PathParams  GetListingCarAuctionIDExtraPathParams
	QueryParams GetListingCarAuctionIDExtraQueryParams
}

type GetListingCarAuctionIDExtraResponse struct {
	ContentType            string
	Error                  *shared.Error
	ListingExtraAttributes *shared.ListingExtraAttributes
	StatusCode             int64
}
