package shared

type HistoricalListing struct {
	Carfax1Owner     *bool            `json:"carfax_1_owner"`
	CarfaxCleanTitle *bool            `json:"carfax_clean_title"`
	City             *string          `json:"city"`
	DataSource       *string          `json:"data_source"`
	DealerID         *int64           `json:"dealer_id"`
	Dom              *int64           `json:"dom"`
	Dom180           *int64           `json:"dom_180"`
	DomActive        *int64           `json:"dom_active"`
	ExteriorColor    *string          `json:"exterior_color"`
	FinancingOptions []ListingFinance `json:"financing_options"`
	FirstSeenAt      *int64           `json:"first_seen_at"`
	FirstSeenAtDate  *string          `json:"first_seen_at_date"`
	Heading          *string          `json:"heading"`
	ID               *string          `json:"id"`
	InteriorColor    *string          `json:"interior_color"`
	InventoryType    *string          `json:"inventory_type"`
	IsCertified      *int64           `json:"is_certified"`
	IsSearchable     *string          `json:"is_searchable"`
	LastSeenAt       *int64           `json:"last_seen_at"`
	LastSeenAtDate   *string          `json:"last_seen_at_date"`
	Latitude         *string          `json:"latitude"`
	LeasingOptions   []ListingLease   `json:"leasing_options"`
	Longitude        *string          `json:"longitude"`
	Miles            *int64           `json:"miles"`
	Msrp             *int64           `json:"msrp"`
	Price            *int64           `json:"price"`
	RefMiles         *string          `json:"ref_miles"`
	RefMilesDt       *int64           `json:"ref_miles_dt"`
	RefPrice         *string          `json:"ref_price"`
	RefPriceDt       *int64           `json:"ref_price_dt"`
	ScrapedAt        *int64           `json:"scraped_at"`
	ScrapedAtDate    *string          `json:"scraped_at_date"`
	SellerName       *string          `json:"seller_name"`
	SellerNameO      *string          `json:"seller_name_o"`
	SellerType       *string          `json:"seller_type"`
	Source           *string          `json:"source"`
	State            *string          `json:"state"`
	StatusDate       *int64           `json:"status_date"`
	StockNo          *string          `json:"stock_no"`
	Street           *string          `json:"street"`
	TrimR            *string          `json:"trim_r"`
	VdpURL           *string          `json:"vdp_url"`
	Vin              *string          `json:"vin"`
	Zip              *string          `json:"zip"`
}
