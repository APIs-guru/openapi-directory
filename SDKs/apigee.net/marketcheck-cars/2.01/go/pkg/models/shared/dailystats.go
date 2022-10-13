package shared

type DailyStats struct {
	Dom          *DailyStatsNestedJSON `json:"dom"`
	MilesStats   *DailyStatsNestedJSON `json:"miles_stats"`
	PriceStats   *DailyStatsNestedJSON `json:"price_stats"`
	UnitsForSale *float64              `json:"units_for_sale"`
}
