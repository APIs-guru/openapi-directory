package shared



type Sales struct {
    City *string `json:"city,omitempty"`
    Counts *int64 `json:"counts,omitempty"`
    Cpo *int64 `json:"cpo,omitempty"`
    DomStats *SalesStats `json:"dom_stats,omitempty"`
    InventoryType *string `json:"inventory_type,omitempty"`
    Make *string `json:"make,omitempty"`
    MilesStats *SalesStats `json:"miles_stats,omitempty"`
    Model *string `json:"model,omitempty"`
    NonCpo *int64 `json:"non-cpo,omitempty"`
    PriceStats *SalesStats `json:"price_stats,omitempty"`
    State *string `json:"state,omitempty"`
    TaxonomyVin *string `json:"taxonomy_vin,omitempty"`
    Trim *string `json:"trim,omitempty"`
    Year *string `json:"year,omitempty"`
    
}

