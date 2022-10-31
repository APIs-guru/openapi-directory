package operations

import (
	"openapi/pkg/models/shared"
)

type GetListingsByDealerListingsGetQueryParams struct {
	DealerID int64  `queryParam:"style=form,explode=true,name=dealerID"`
	Jwt      string `queryParam:"style=form,explode=true,name=jwt"`
	NewCars  *bool  `queryParam:"style=form,explode=true,name=newCars"`
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
}

type GetListingsByDealerListingsGetRequest struct {
	QueryParams GetListingsByDealerListingsGetQueryParams
}

type GetListingsByDealerListingsGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	ListingResp         *shared.ListingResp
	StatusCode          int64
}
