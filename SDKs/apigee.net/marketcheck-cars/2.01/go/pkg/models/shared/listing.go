package shared

type Listing struct {
	Build                 *Build                      `json:"build"`
	Carfax1Owner          *bool                       `json:"carfax_1_owner"`
	CarfaxCleanTitle      *bool                       `json:"carfax_clean_title"`
	DataSource            *string                     `json:"data_source"`
	Dealer                *NestDealer                 `json:"dealer"`
	Dom                   *int64                      `json:"dom"`
	Dom180                *int64                      `json:"dom_180"`
	DomActive             *int64                      `json:"dom_active"`
	ExteriorColor         *string                     `json:"exterior_color"`
	Extra                 *ListingNestExtraAttributes `json:"extra"`
	FinancingOptions      []ListingFinance            `json:"financing_options"`
	FirstSeenAt           *int64                      `json:"first_seen_at"`
	FirstSeenAtDate       *string                     `json:"first_seen_at_date"`
	FirstSeenAtMc         *int64                      `json:"first_seen_at_mc"`
	FirstSeenAtMcDate     *string                     `json:"first_seen_at_mc_date"`
	FirstSeenAtSource     *int64                      `json:"first_seen_at_source"`
	FirstSeenAtSourceDate *string                     `json:"first_seen_at_source_date"`
	Heading               *string                     `json:"heading"`
	ID                    *string                     `json:"id"`
	InteriorColor         *string                     `json:"interior_color"`
	InventoryType         *string                     `json:"inventory_type"`
	IsCertified           *int64                      `json:"is_certified"`
	LastSeenAt            *int64                      `json:"last_seen_at"`
	LastSeenAtDate        *string                     `json:"last_seen_at_date"`
	LeasingOptions        []ListingLease              `json:"leasing_options"`
	Media                 *ListingNestMedia           `json:"media"`
	Miles                 *int64                      `json:"miles"`
	Msrp                  *int64                      `json:"msrp"`
	Price                 *int64                      `json:"price"`
	Rank                  *int64                      `json:"rank"`
	RefMiles              *string                     `json:"ref_miles"`
	RefMilesDt            *int64                      `json:"ref_miles_dt"`
	RefPrice              *string                     `json:"ref_price"`
	RefPriceDt            *int64                      `json:"ref_price_dt"`
	Score                 *float64                    `json:"score"`
	ScrapedAt             *int64                      `json:"scraped_at"`
	ScrapedAtDate         *string                     `json:"scraped_at_date"`
	SellerType            *string                     `json:"seller_type"`
	Source                *string                     `json:"source"`
	StockNo               *string                     `json:"stock_no"`
	VdpURL                *string                     `json:"vdp_url"`
	Vin                   *string                     `json:"vin"`
}
