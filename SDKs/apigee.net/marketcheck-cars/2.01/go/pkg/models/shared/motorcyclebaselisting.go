package shared



type MotorcycleBaseListing struct {
    Build *MotorcycleBuild `json:"build,omitempty"`
    Color *string `json:"color,omitempty"`
    Dealer *NestDealer `json:"dealer,omitempty"`
    Dist *float64 `json:"dist,omitempty"`
    DpURL *string `json:"dp_url,omitempty"`
    FirstSeenAt *int64 `json:"first_seen_at,omitempty"`
    FirstSeenAtDate *string `json:"first_seen_at_date,omitempty"`
    Heading *string `json:"heading,omitempty"`
    ID *string `json:"id,omitempty"`
    InventoryType *string `json:"inventory_type,omitempty"`
    LastSeenAt *int64 `json:"last_seen_at,omitempty"`
    LastSeenAtDate *string `json:"last_seen_at_date,omitempty"`
    Media *ListingNestMedia `json:"media,omitempty"`
    Miles *int64 `json:"miles,omitempty"`
    Msrp *int64 `json:"msrp,omitempty"`
    Price *int64 `json:"price,omitempty"`
    ScrapedAt *float64 `json:"scraped_at,omitempty"`
    ScrapedAtDate *string `json:"scraped_at_date,omitempty"`
    SellerType *string `json:"seller_type,omitempty"`
    Source *string `json:"source,omitempty"`
    StockNo *string `json:"stock_no,omitempty"`
    Vin *string `json:"vin,omitempty"`
    
}

