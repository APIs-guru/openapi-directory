package shared

type BaseListing struct {
	Build            *Build            `json:"build"`
	Carfax1Owner     *bool             `json:"carfax_1_owner"`
	CarfaxCleanTitle *bool             `json:"carfax_clean_title"`
	DataSource       *string           `json:"data_source"`
	Dealer           *NestDealer       `json:"dealer"`
	Dist             *float64          `json:"dist"`
	Dom              *int64            `json:"dom"`
	Dom180           *int64            `json:"dom_180"`
	DomActive        *int64            `json:"dom_active"`
	ExteriorColor    *string           `json:"exterior_color"`
	FinancingOptions []ListingFinance  `json:"financing_options"`
	FirstSeenAt      *int64            `json:"first_seen_at"`
	FirstSeenAtDate  *string           `json:"first_seen_at_date"`
	Heading          *string           `json:"heading"`
	ID               *string           `json:"id"`
	InteriorColor    *string           `json:"interior_color"`
	InventoryType    *string           `json:"inventory_type"`
	IsCertified      *int64            `json:"is_certified"`
	LastSeenAt       *int64            `json:"last_seen_at"`
	LastSeenAtDate   *string           `json:"last_seen_at_date"`
	LeasingOptions   []ListingLease    `json:"leasing_options"`
	Media            *ListingNestMedia `json:"media"`
	Miles            *int64            `json:"miles"`
	ModelCode        *string           `json:"model_code"`
	Msrp             *int64            `json:"msrp"`
	Price            *int64            `json:"price"`
	RefMiles         *string           `json:"ref_miles"`
	RefMilesDt       *int64            `json:"ref_miles_dt"`
	RefPrice         *string           `json:"ref_price"`
	RefPriceDt       *int64            `json:"ref_price_dt"`
	ScrapedAt        *float64          `json:"scraped_at"`
	ScrapedAtDate    *string           `json:"scraped_at_date"`
	SellerType       *string           `json:"seller_type"`
	Source           *string           `json:"source"`
	StockNo          *string           `json:"stock_no"`
	VdpURL           *string           `json:"vdp_url"`
	Vin              *string           `json:"vin"`
}
