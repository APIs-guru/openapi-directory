package shared

// DestinyHistoricalStatsDestinyClanAggregateStatValueBasic
// Basic stat value.
type DestinyHistoricalStatsDestinyClanAggregateStatValueBasic struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyClanAggregateStatValuePga
// Per game average for the statistic, if applicable
type DestinyHistoricalStatsDestinyClanAggregateStatValuePga struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted
// Weighted value of the stat if a weight greater than 1 has been assigned.
type DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyClanAggregateStatValue
// Value of the stat for this player
type DestinyHistoricalStatsDestinyClanAggregateStatValue struct {
	ActivityID *int64
	Basic      *DestinyHistoricalStatsDestinyClanAggregateStatValueBasic
	Pga        *DestinyHistoricalStatsDestinyClanAggregateStatValuePga
	StatID     *string
	Weighted   *DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted
}

type DestinyHistoricalStatsDestinyClanAggregateStat struct {
	Mode   *int32
	StatID *string
	Value  *DestinyHistoricalStatsDestinyClanAggregateStatValue
}
