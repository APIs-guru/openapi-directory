package shared

type DestinyHistoricalStatsDestinyHistoricalStatsPerCharacter struct {
	CharacterID *int64
	Deleted     *bool
	Merged      *DestinyHistoricalStatsDestinyHistoricalStatsByPeriod
	Results     map[string]DestinyHistoricalStatsDestinyHistoricalStatsByPeriod
}
