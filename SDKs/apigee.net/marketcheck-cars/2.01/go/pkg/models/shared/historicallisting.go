package shared



type HistoricalListing struct {
    Carfax1Owner *bool `json:"carfax_1_owner,omitempty"`
    CarfaxCleanTitle *bool `json:"carfax_clean_title,omitempty"`
    City *string `json:"city,omitempty"`
    DataSource *string `json:"data_source,omitempty"`
    DealerID *int64 `json:"dealer_id,omitempty"`
    Dom *int64 `json:"dom,omitempty"`
    Dom180 *int64 `json:"dom_180,omitempty"`
    DomActive *int64 `json:"dom_active,omitempty"`
    ExteriorColor *string `json:"exterior_color,omitempty"`
    FinancingOptions []ListingFinance `json:"financing_options,omitempty"`
    FirstSeenAt *int64 `json:"first_seen_at,omitempty"`
    FirstSeenAtDate *string `json:"first_seen_at_date,omitempty"`
    Heading *string `json:"heading,omitempty"`
    ID *string `json:"id,omitempty"`
    InteriorColor *string `json:"interior_color,omitempty"`
    InventoryType *string `json:"inventory_type,omitempty"`
    IsCertified *int64 `json:"is_certified,omitempty"`
    IsSearchable *string `json:"is_searchable,omitempty"`
    LastSeenAt *int64 `json:"last_seen_at,omitempty"`
    LastSeenAtDate *string `json:"last_seen_at_date,omitempty"`
    Latitude *string `json:"latitude,omitempty"`
    LeasingOptions []ListingLease `json:"leasing_options,omitempty"`
    Longitude *string `json:"longitude,omitempty"`
    Miles *int64 `json:"miles,omitempty"`
    Msrp *int64 `json:"msrp,omitempty"`
    Price *int64 `json:"price,omitempty"`
    RefMiles *string `json:"ref_miles,omitempty"`
    RefMilesDt *int64 `json:"ref_miles_dt,omitempty"`
    RefPrice *string `json:"ref_price,omitempty"`
    RefPriceDt *int64 `json:"ref_price_dt,omitempty"`
    ScrapedAt *int64 `json:"scraped_at,omitempty"`
    ScrapedAtDate *string `json:"scraped_at_date,omitempty"`
    SellerName *string `json:"seller_name,omitempty"`
    SellerNameO *string `json:"seller_name_o,omitempty"`
    SellerType *string `json:"seller_type,omitempty"`
    Source *string `json:"source,omitempty"`
    State *string `json:"state,omitempty"`
    StatusDate *int64 `json:"status_date,omitempty"`
    StockNo *string `json:"stock_no,omitempty"`
    Street *string `json:"street,omitempty"`
    TrimR *string `json:"trim_r,omitempty"`
    VdpURL *string `json:"vdp_url,omitempty"`
    Vin *string `json:"vin,omitempty"`
    Zip *string `json:"zip,omitempty"`
    
}

