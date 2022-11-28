package shared

// DestinyHistoricalStatsDestinyHistoricalStatsValueBasic
// Basic stat value.
type DestinyHistoricalStatsDestinyHistoricalStatsValueBasic struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyHistoricalStatsValuePga
// Per game average for the statistic, if applicable
type DestinyHistoricalStatsDestinyHistoricalStatsValuePga struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted
// Weighted value of the stat if a weight greater than 1 has been assigned.
type DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted struct {
	DisplayValue *string
	Value        *float64
}

type DestinyHistoricalStatsDestinyHistoricalStatsValue struct {
	ActivityID *int64
	Basic      *DestinyHistoricalStatsDestinyHistoricalStatsValueBasic
	Pga        *DestinyHistoricalStatsDestinyHistoricalStatsValuePga
	StatID     *string
	Weighted   *DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted
}
