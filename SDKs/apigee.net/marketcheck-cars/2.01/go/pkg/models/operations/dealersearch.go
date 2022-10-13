package operations

import (
	"openapi/pkg/models/shared"
)

type DealerSearchQueryParams struct {
	APIKey            *string                       `queryParam:"style=form,explode=true,name=api_key"`
	City              *string                       `queryParam:"style=form,explode=true,name=city"`
	Country           *shared.NonDefaultCountryEnum `queryParam:"style=form,explode=true,name=country"`
	DealerType        *shared.DealerTypeEnum        `queryParam:"style=form,explode=true,name=dealer_type"`
	Facets            *string                       `queryParam:"style=form,explode=true,name=facets"`
	InventoryURL      *string                       `queryParam:"style=form,explode=true,name=inventory_url"`
	Latitude          *float64                      `queryParam:"style=form,explode=true,name=latitude"`
	ListingCountRange *string                       `queryParam:"style=form,explode=true,name=listing_count_range"`
	Longitude         *float64                      `queryParam:"style=form,explode=true,name=longitude"`
	Provider          *bool                         `queryParam:"style=form,explode=true,name=provider"`
	Radius            *int32                        `queryParam:"style=form,explode=true,name=radius"`
	RangeFacets       *string                       `queryParam:"style=form,explode=true,name=range_facets"`
	Rows              *int32                        `queryParam:"style=form,explode=true,name=rows"`
	SortBy            *string                       `queryParam:"style=form,explode=true,name=sort_by"`
	SortOrder         *shared.SortOrderEnum         `queryParam:"style=form,explode=true,name=sort_order"`
	Start             *int32                        `queryParam:"style=form,explode=true,name=start"`
	State             *string                       `queryParam:"style=form,explode=true,name=state"`
	Zip               *string                       `queryParam:"style=form,explode=true,name=zip"`
}

type DealerSearchRequest struct {
	QueryParams DealerSearchQueryParams
}

type DealerSearchResponse struct {
	ContentType     string
	DealersResponse *shared.DealersResponse
	Error           *shared.Error
	StatusCode      int64
}
