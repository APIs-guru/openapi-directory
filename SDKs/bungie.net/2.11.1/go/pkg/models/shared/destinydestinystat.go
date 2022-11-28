package shared

// DestinyDestinyStat
// Represents a stat on an item *or* Character (NOT a Historical Stat, but a physical attribute stat like Attack, Defense etc...)
type DestinyDestinyStat struct {
	StatHash *int64
	Value    *int32
}
