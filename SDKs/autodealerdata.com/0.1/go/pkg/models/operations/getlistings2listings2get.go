package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetListings2Listings2GetQueryParams struct {
	BrandName      *string    `queryParam:"style=form,explode=true,name=brandName"`
	DaysBack       *int64     `queryParam:"style=form,explode=true,name=daysBack"`
	DealerID       *int64     `queryParam:"style=form,explode=true,name=dealerID"`
	EndDate        *time.Time `queryParam:"style=form,explode=true,name=endDate"`
	ExtendedSearch *bool      `queryParam:"style=form,explode=true,name=extendedSearch"`
	Jwt            string     `queryParam:"style=form,explode=true,name=jwt"`
	ModelName      *string    `queryParam:"style=form,explode=true,name=modelName"`
	ModelYear      *int64     `queryParam:"style=form,explode=true,name=modelYear"`
	NewCars        *bool      `queryParam:"style=form,explode=true,name=newCars"`
	Page           *int64     `queryParam:"style=form,explode=true,name=page"`
	RegionName     *string    `queryParam:"style=form,explode=true,name=regionName"`
	StartDate      *time.Time `queryParam:"style=form,explode=true,name=startDate"`
	ZipCode        *int64     `queryParam:"style=form,explode=true,name=zipCode"`
}

type GetListings2Listings2GetRequest struct {
	QueryParams GetListings2Listings2GetQueryParams
}

type GetListings2Listings2GetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	ListingResp         *shared.ListingResp
	StatusCode          int64
}
