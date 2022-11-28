package shared

// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic
// Basic stat value.
type DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga
// Per game average for the statistic, if applicable
type DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted
// Weighted value of the stat if a weight greater than 1 has been assigned.
type DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore
// Score earned by the team
type DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore struct {
	ActivityID *int64
	Basic      *DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic
	Pga        *DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga
	StatID     *string
	Weighted   *DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted
}

// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic
// Basic stat value.
type DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga
// Per game average for the statistic, if applicable
type DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted
// Weighted value of the stat if a weight greater than 1 has been assigned.
type DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted struct {
	DisplayValue *string
	Value        *float64
}

// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding
// Team's standing relative to other teams.
type DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding struct {
	ActivityID *int64
	Basic      *DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic
	Pga        *DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga
	StatID     *string
	Weighted   *DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted
}

type DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry struct {
	Score    *DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore
	Standing *DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding
	TeamID   *int32
	TeamName *string
}
