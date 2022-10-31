package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams struct {
	EndDate   time.Time `queryParam:"style=form,explode=true,name=endDate"`
	Jwt       string    `queryParam:"style=form,explode=true,name=jwt"`
	ModelName *string   `queryParam:"style=form,explode=true,name=modelName"`
	NewCars   *bool     `queryParam:"style=form,explode=true,name=newCars"`
	Page      *int64    `queryParam:"style=form,explode=true,name=page"`
	StartDate time.Time `queryParam:"style=form,explode=true,name=startDate"`
	ZipCode   int64     `queryParam:"style=form,explode=true,name=zipCode"`
}

type ListingsByZipCodeAndDateListingsByZipCodeAndDateGetRequest struct {
	QueryParams ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams
}

type ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	ListingResp         *shared.ListingResp
	StatusCode          int64
}
