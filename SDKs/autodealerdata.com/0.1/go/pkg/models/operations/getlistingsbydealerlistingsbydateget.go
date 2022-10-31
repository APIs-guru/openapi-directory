package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetListingsByDealerListingsByDateGetQueryParams struct {
	DealerID  int64     `queryParam:"style=form,explode=true,name=dealerID"`
	EndDate   time.Time `queryParam:"style=form,explode=true,name=endDate"`
	Jwt       string    `queryParam:"style=form,explode=true,name=jwt"`
	NewCars   *bool     `queryParam:"style=form,explode=true,name=newCars"`
	Page      *int64    `queryParam:"style=form,explode=true,name=page"`
	StartDate time.Time `queryParam:"style=form,explode=true,name=startDate"`
}

type GetListingsByDealerListingsByDateGetRequest struct {
	QueryParams GetListingsByDealerListingsByDateGetQueryParams
}

type GetListingsByDealerListingsByDateGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	ListingResp         *shared.ListingResp
	StatusCode          int64
}
