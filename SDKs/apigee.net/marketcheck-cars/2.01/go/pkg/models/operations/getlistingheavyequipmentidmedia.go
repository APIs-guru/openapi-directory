package operations

import (
	"openapi/pkg/models/shared"
)

type GetListingHeavyEquipmentIDMediaPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetListingHeavyEquipmentIDMediaQueryParams struct {
	APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
}

type GetListingHeavyEquipmentIDMediaRequest struct {
	PathParams  GetListingHeavyEquipmentIDMediaPathParams
	QueryParams GetListingHeavyEquipmentIDMediaQueryParams
}

type GetListingHeavyEquipmentIDMediaResponse struct {
	ContentType  string
	Error        *shared.Error
	ListingMedia *shared.ListingMedia
	StatusCode   int64
}
