package shared

import (
	"time"
)

// DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails
// Details about the activity.
type DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails struct {
	DirectorActivityHash *int64
	InstanceID           *int64
	IsPrivate            *bool
	MembershipType       *int32
	Mode                 *int32
	Modes                []int32
	ReferenceID          *int64
}

type DestinyHistoricalStatsDestinyPostGameCarnageReportData struct {
	ActivityDetails    *DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails
	Entries            []DestinyHistoricalStatsDestinyPostGameCarnageReportEntry
	Period             *time.Time
	StartingPhaseIndex *int32
	Teams              []DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry
}
