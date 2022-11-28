package shared

// DestinyProgressionDestinyFactionProgression
// Mostly for historical purposes, we segregate Faction progressions from other progressions. This is just a DestinyProgression with a shortcut for finding the DestinyFactionDefinition of the faction related to the progression.
type DestinyProgressionDestinyFactionProgression struct {
	CurrentProgress     *int32
	CurrentResetCount   *int32
	DailyLimit          *int32
	DailyProgress       *int32
	FactionHash         *int64
	FactionVendorIndex  *int32
	Level               *int32
	LevelCap            *int32
	NextLevelAt         *int32
	ProgressToNextLevel *int32
	ProgressionHash     *int64
	RewardItemStates    []int32
	SeasonResets        []DestinyDestinyProgressionResetEntry
	StepIndex           *int32
	WeeklyLimit         *int32
	WeeklyProgress      *int32
}
