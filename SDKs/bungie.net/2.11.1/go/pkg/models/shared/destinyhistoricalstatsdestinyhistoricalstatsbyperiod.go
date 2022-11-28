package shared

type DestinyHistoricalStatsDestinyHistoricalStatsByPeriod struct {
	AllTime      map[string]DestinyHistoricalStatsDestinyHistoricalStatsValue
	AllTimeTier1 map[string]DestinyHistoricalStatsDestinyHistoricalStatsValue
	AllTimeTier2 map[string]DestinyHistoricalStatsDestinyHistoricalStatsValue
	AllTimeTier3 map[string]DestinyHistoricalStatsDestinyHistoricalStatsValue
	Daily        []DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup
	Monthly      []DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup
}
