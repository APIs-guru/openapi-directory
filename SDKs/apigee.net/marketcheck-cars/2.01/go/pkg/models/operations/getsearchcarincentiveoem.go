package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchCarIncentiveOemOfferTypeEnum string

const (
	GetSearchCarIncentiveOemOfferTypeEnumLease   GetSearchCarIncentiveOemOfferTypeEnum = "lease"
	GetSearchCarIncentiveOemOfferTypeEnumFinance GetSearchCarIncentiveOemOfferTypeEnum = "finance"
	GetSearchCarIncentiveOemOfferTypeEnumCash    GetSearchCarIncentiveOemOfferTypeEnum = "cash"
)

type GetSearchCarIncentiveOemQueryParams struct {
	AcquisitionFee         *string                                `queryParam:"style=form,explode=true,name=acquisition_fee"`
	APIKey                 *string                                `queryParam:"style=form,explode=true,name=api_key"`
	Apr                    *string                                `queryParam:"style=form,explode=true,name=apr"`
	CashbackAmount         *string                                `queryParam:"style=form,explode=true,name=cashback_amount"`
	CashbackTargetGroup    *string                                `queryParam:"style=form,explode=true,name=cashback_target_group"`
	City                   *string                                `queryParam:"style=form,explode=true,name=city"`
	Country                *shared.CountryEnum                    `queryParam:"style=form,explode=true,name=country"`
	DealerContribution     *string                                `queryParam:"style=form,explode=true,name=dealer_contribution"`
	DispositionFee         *string                                `queryParam:"style=form,explode=true,name=disposition_fee"`
	DownPayment            *string                                `queryParam:"style=form,explode=true,name=down_payment"`
	DueAtSigning           *string                                `queryParam:"style=form,explode=true,name=due_at_signing"`
	Duration               *string                                `queryParam:"style=form,explode=true,name=duration"`
	FacetSort              *shared.FacetSortEnum                  `queryParam:"style=form,explode=true,name=facet_sort"`
	Facets                 *string                                `queryParam:"style=form,explode=true,name=facets"`
	FirstSeenRange         *string                                `queryParam:"style=form,explode=true,name=first_seen_range"`
	GrossCapitalisedCost   *string                                `queryParam:"style=form,explode=true,name=gross_capitalised_cost"`
	LastSeenRange          *string                                `queryParam:"style=form,explode=true,name=last_seen_range"`
	Latitude               *float64                               `queryParam:"style=form,explode=true,name=latitude"`
	LeaseEndPurchaseOption *string                                `queryParam:"style=form,explode=true,name=lease_end_purchase_option"`
	Longitude              *float64                               `queryParam:"style=form,explode=true,name=longitude"`
	Make                   *string                                `queryParam:"style=form,explode=true,name=make"`
	MileageCharge          *string                                `queryParam:"style=form,explode=true,name=mileage_charge"`
	MileageChargeLimit     *string                                `queryParam:"style=form,explode=true,name=mileage_charge_limit"`
	Model                  *string                                `queryParam:"style=form,explode=true,name=model"`
	Monthly                *string                                `queryParam:"style=form,explode=true,name=monthly"`
	MonthlyPerThousand     *string                                `queryParam:"style=form,explode=true,name=monthly_per_thousand"`
	Msrp                   *string                                `queryParam:"style=form,explode=true,name=msrp"`
	NetCapitalisedCost     *string                                `queryParam:"style=form,explode=true,name=net_capitalised_cost"`
	OfferType              *GetSearchCarIncentiveOemOfferTypeEnum `queryParam:"style=form,explode=true,name=offer_type"`
	Radius                 *int32                                 `queryParam:"style=form,explode=true,name=radius"`
	RangeFacets            *string                                `queryParam:"style=form,explode=true,name=range_facets"`
	Rows                   *int32                                 `queryParam:"style=form,explode=true,name=rows"`
	SearchText             *string                                `queryParam:"style=form,explode=true,name=search_text"`
	SecurityDeposit        *string                                `queryParam:"style=form,explode=true,name=security_deposit"`
	SortBy                 *string                                `queryParam:"style=form,explode=true,name=sort_by"`
	SortOrder              *shared.SortOrderEnum                  `queryParam:"style=form,explode=true,name=sort_order"`
	Start                  *int32                                 `queryParam:"style=form,explode=true,name=start"`
	State                  *string                                `queryParam:"style=form,explode=true,name=state"`
	Stats                  *string                                `queryParam:"style=form,explode=true,name=stats"`
	TotalMonthlyPayment    *string                                `queryParam:"style=form,explode=true,name=total_monthly_payment"`
	Trim                   *string                                `queryParam:"style=form,explode=true,name=trim"`
	Year                   *string                                `queryParam:"style=form,explode=true,name=year"`
	Zip                    *string                                `queryParam:"style=form,explode=true,name=zip"`
}

type GetSearchCarIncentiveOemRequest struct {
	QueryParams GetSearchCarIncentiveOemQueryParams
}

type GetSearchCarIncentiveOemResponse struct {
	ContentType    string
	Error          *shared.Error
	SearchResponse *shared.SearchResponse
	StatusCode     int64
}
