package operations

import (
	"openapi/pkg/models/shared"
)

type GetListingCarFsboIDExtraPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetListingCarFsboIDExtraQueryParams struct {
	APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
}

type GetListingCarFsboIDExtraRequest struct {
	PathParams  GetListingCarFsboIDExtraPathParams
	QueryParams GetListingCarFsboIDExtraQueryParams
}

type GetListingCarFsboIDExtraResponse struct {
	ContentType            string
	Error                  *shared.Error
	ListingExtraAttributes *shared.ListingExtraAttributes
	StatusCode             int64
}
