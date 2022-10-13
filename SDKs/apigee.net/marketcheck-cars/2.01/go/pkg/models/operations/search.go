package operations

import (
	"openapi/pkg/models/shared"
)

type SearchQueryParams struct {
	APIKey                 *string                      `queryParam:"style=form,explode=true,name=api_key"`
	AppendAPIKey           *bool                        `queryParam:"style=form,explode=true,name=append_api_key"`
	BaseExteriorColor      *string                      `queryParam:"style=form,explode=true,name=base_exterior_color"`
	BaseInteriorColor      *string                      `queryParam:"style=form,explode=true,name=base_interior_color"`
	BodySubtype            *string                      `queryParam:"style=form,explode=true,name=body_subtype"`
	BodyType               *string                      `queryParam:"style=form,explode=true,name=body_type"`
	CarType                *shared.CarCarTypeEnum       `queryParam:"style=form,explode=true,name=car_type"`
	Carfax1Owner           *shared.Carfax1OwnerEnum     `queryParam:"style=form,explode=true,name=carfax_1_owner"`
	CarfaxCleanTitle       *shared.CarfaxCleanTitleEnum `queryParam:"style=form,explode=true,name=carfax_clean_title"`
	City                   *string                      `queryParam:"style=form,explode=true,name=city"`
	CityMpgRange           *string                      `queryParam:"style=form,explode=true,name=city_mpg_range"`
	Country                *shared.CarCountryEnum       `queryParam:"style=form,explode=true,name=country"`
	Cylinders              *string                      `queryParam:"style=form,explode=true,name=cylinders"`
	DealerType             *shared.DealerTypeEnum       `queryParam:"style=form,explode=true,name=dealer_type"`
	Dedup                  *bool                        `queryParam:"style=form,explode=true,name=dedup"`
	Dom180Range            *string                      `queryParam:"style=form,explode=true,name=dom_180_range"`
	DomActiveRange         *string                      `queryParam:"style=form,explode=true,name=dom_active_range"`
	DomRange               *string                      `queryParam:"style=form,explode=true,name=dom_range"`
	Doors                  *string                      `queryParam:"style=form,explode=true,name=doors"`
	Drivetrain             *string                      `queryParam:"style=form,explode=true,name=drivetrain"`
	Engine                 *string                      `queryParam:"style=form,explode=true,name=engine"`
	EngineAspiration       *string                      `queryParam:"style=form,explode=true,name=engine_aspiration"`
	EngineBlock            *string                      `queryParam:"style=form,explode=true,name=engine_block"`
	EngineSize             *string                      `queryParam:"style=form,explode=true,name=engine_size"`
	ExcludeCertified       *bool                        `queryParam:"style=form,explode=true,name=exclude_certified"`
	ExteriorColor          *string                      `queryParam:"style=form,explode=true,name=exterior_color"`
	FacetSort              *shared.FacetSortEnum        `queryParam:"style=form,explode=true,name=facet_sort"`
	Facets                 *string                      `queryParam:"style=form,explode=true,name=facets"`
	FinanceDownPayment     *string                      `queryParam:"style=form,explode=true,name=finance_down_payment"`
	FinanceDownPaymentPer  *string                      `queryParam:"style=form,explode=true,name=finance_down_payment_per"`
	FinanceEmp             *string                      `queryParam:"style=form,explode=true,name=finance_emp"`
	FinanceLoanApr         *string                      `queryParam:"style=form,explode=true,name=finance_loan_apr"`
	FinanceLoanTerm        *string                      `queryParam:"style=form,explode=true,name=finance_loan_term"`
	FirstSeenAtMcDays      *string                      `queryParam:"style=form,explode=true,name=first_seen_at_mc_days"`
	FirstSeenAtMcRange     *string                      `queryParam:"style=form,explode=true,name=first_seen_at_mc_range"`
	FirstSeenAtSourceDays  *string                      `queryParam:"style=form,explode=true,name=first_seen_at_source_days"`
	FirstSeenAtSourceRange *string                      `queryParam:"style=form,explode=true,name=first_seen_at_source_range"`
	FirstSeenDays          *string                      `queryParam:"style=form,explode=true,name=first_seen_days"`
	FirstSeenRange         *string                      `queryParam:"style=form,explode=true,name=first_seen_range"`
	FuelType               *string                      `queryParam:"style=form,explode=true,name=fuel_type"`
	HighwayMpgRange        *string                      `queryParam:"style=form,explode=true,name=highway_mpg_range"`
	IncludeFinance         *bool                        `queryParam:"style=form,explode=true,name=include_finance"`
	IncludeLease           *bool                        `queryParam:"style=form,explode=true,name=include_lease"`
	IncludeNonVinListings  *bool                        `queryParam:"style=form,explode=true,name=include_non_vin_listings"`
	IncludeRelevantLinks   *bool                        `queryParam:"style=form,explode=true,name=include_relevant_links"`
	InteriorColor          *string                      `queryParam:"style=form,explode=true,name=interior_color"`
	LastSeenDays           *string                      `queryParam:"style=form,explode=true,name=last_seen_days"`
	LastSeenRange          *string                      `queryParam:"style=form,explode=true,name=last_seen_range"`
	Latitude               *float64                     `queryParam:"style=form,explode=true,name=latitude"`
	LeaseDownPayment       *string                      `queryParam:"style=form,explode=true,name=lease_down_payment"`
	LeaseEmp               *string                      `queryParam:"style=form,explode=true,name=lease_emp"`
	LeaseTerm              *string                      `queryParam:"style=form,explode=true,name=lease_term"`
	Longitude              *float64                     `queryParam:"style=form,explode=true,name=longitude"`
	Make                   *string                      `queryParam:"style=form,explode=true,name=make"`
	Match                  *string                      `queryParam:"style=form,explode=true,name=match"`
	MilesRange             *string                      `queryParam:"style=form,explode=true,name=miles_range"`
	Mm                     *string                      `queryParam:"style=form,explode=true,name=mm"`
	Model                  *string                      `queryParam:"style=form,explode=true,name=model"`
	MsaCode                *string                      `queryParam:"style=form,explode=true,name=msa_code"`
	MsrpRange              *string                      `queryParam:"style=form,explode=true,name=msrp_range"`
	Nodedup                *bool                        `queryParam:"style=form,explode=true,name=nodedup"`
	Owned                  *bool                        `queryParam:"style=form,explode=true,name=owned"`
	PhotoLinks             *bool                        `queryParam:"style=form,explode=true,name=photo_links"`
	Plot                   *bool                        `queryParam:"style=form,explode=true,name=plot"`
	PriceRange             *string                      `queryParam:"style=form,explode=true,name=price_range"`
	Radius                 *int32                       `queryParam:"style=form,explode=true,name=radius"`
	RangeFacets            *string                      `queryParam:"style=form,explode=true,name=range_facets"`
	Rows                   *int32                       `queryParam:"style=form,explode=true,name=rows"`
	SortBy                 *string                      `queryParam:"style=form,explode=true,name=sort_by"`
	SortOrder              *shared.SortOrderEnum        `queryParam:"style=form,explode=true,name=sort_order"`
	Start                  *int32                       `queryParam:"style=form,explode=true,name=start"`
	State                  *string                      `queryParam:"style=form,explode=true,name=state"`
	Stats                  *string                      `queryParam:"style=form,explode=true,name=stats"`
	StockNo                *string                      `queryParam:"style=form,explode=true,name=stock_no"`
	TaxonomyVins           *string                      `queryParam:"style=form,explode=true,name=taxonomy_vins"`
	Transmission           *string                      `queryParam:"style=form,explode=true,name=transmission"`
	Trim                   *string                      `queryParam:"style=form,explode=true,name=trim"`
	TrimO                  *string                      `queryParam:"style=form,explode=true,name=trim_o"`
	TrimR                  *string                      `queryParam:"style=form,explode=true,name=trim_r"`
	VehicleType            *string                      `queryParam:"style=form,explode=true,name=vehicle_type"`
	Vin                    *string                      `queryParam:"style=form,explode=true,name=vin"`
	Vins                   *string                      `queryParam:"style=form,explode=true,name=vins"`
	Year                   *string                      `queryParam:"style=form,explode=true,name=year"`
	Ymm                    *string                      `queryParam:"style=form,explode=true,name=ymm"`
	Ymmt                   *string                      `queryParam:"style=form,explode=true,name=ymmt"`
	Zip                    *string                      `queryParam:"style=form,explode=true,name=zip"`
}

type SearchRequest struct {
	QueryParams SearchQueryParams
}

type SearchResponse struct {
	ContentType    string
	Error          *shared.Error
	SearchResponse *shared.SearchResponse
	StatusCode     int64
}
