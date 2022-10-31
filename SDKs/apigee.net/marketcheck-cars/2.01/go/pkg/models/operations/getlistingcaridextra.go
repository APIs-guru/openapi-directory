package operations

import (
	"openapi/pkg/models/shared"
)

type GetListingCarIDExtraPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetListingCarIDExtraQueryParams struct {
	APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
}

type GetListingCarIDExtraRequest struct {
	PathParams  GetListingCarIDExtraPathParams
	QueryParams GetListingCarIDExtraQueryParams
}

type GetListingCarIDExtraResponse struct {
	ContentType            string
	Error                  *shared.Error
	ListingExtraAttributes *shared.ListingExtraAttributes
	StatusCode             int64
}
