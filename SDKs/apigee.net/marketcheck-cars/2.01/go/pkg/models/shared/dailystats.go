package shared



type DailyStats struct {
    Dom *DailyStatsNestedJSON `json:"dom,omitempty"`
    MilesStats *DailyStatsNestedJSON `json:"miles_stats,omitempty"`
    PriceStats *DailyStatsNestedJSON `json:"price_stats,omitempty"`
    UnitsForSale *float64 `json:"units_for_sale,omitempty"`
    
}

