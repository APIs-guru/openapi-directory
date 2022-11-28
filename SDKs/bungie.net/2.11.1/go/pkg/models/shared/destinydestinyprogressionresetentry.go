package shared

// DestinyDestinyProgressionResetEntry
// Represents a season and the number of resets you had in that season.
//
//	We do not necessarily - even for progressions with resets - track it over all seasons. So be careful and check the season numbers being returned.
type DestinyDestinyProgressionResetEntry struct {
	Resets *int32
	Season *int32
}
