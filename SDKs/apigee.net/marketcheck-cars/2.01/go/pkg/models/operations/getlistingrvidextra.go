package operations

import (
	"openapi/pkg/models/shared"
)

type GetListingRvIDExtraPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetListingRvIDExtraQueryParams struct {
	APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
}

type GetListingRvIDExtraRequest struct {
	PathParams  GetListingRvIDExtraPathParams
	QueryParams GetListingRvIDExtraQueryParams
}

type GetListingRvIDExtraResponse struct {
	ContentType            string
	Error                  *shared.Error
	ListingExtraAttributes *shared.ListingExtraAttributes
	StatusCode             int64
}
