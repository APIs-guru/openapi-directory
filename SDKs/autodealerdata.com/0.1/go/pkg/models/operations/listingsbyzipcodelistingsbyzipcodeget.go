package operations

import (
	"openapi/pkg/models/shared"
)

type ListingsByZipCodeListingsByZipCodeGetQueryParams struct {
	Jwt       string  `queryParam:"style=form,explode=true,name=jwt"`
	ModelName *string `queryParam:"style=form,explode=true,name=modelName"`
	NewCars   *bool   `queryParam:"style=form,explode=true,name=newCars"`
	Page      *int64  `queryParam:"style=form,explode=true,name=page"`
	ZipCode   int64   `queryParam:"style=form,explode=true,name=zipCode"`
}

type ListingsByZipCodeListingsByZipCodeGetRequest struct {
	QueryParams ListingsByZipCodeListingsByZipCodeGetQueryParams
}

type ListingsByZipCodeListingsByZipCodeGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	ListingResp         *shared.ListingResp
	StatusCode          int64
}
