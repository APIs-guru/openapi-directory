package operations

import (
	"openapi/pkg/models/shared"
)

type GetListingRvIDMediaPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetListingRvIDMediaQueryParams struct {
	APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
}

type GetListingRvIDMediaRequest struct {
	PathParams  GetListingRvIDMediaPathParams
	QueryParams GetListingRvIDMediaQueryParams
}

type GetListingRvIDMediaResponse struct {
	ContentType  string
	Error        *shared.Error
	ListingMedia *shared.ListingMedia
	StatusCode   int64
}
