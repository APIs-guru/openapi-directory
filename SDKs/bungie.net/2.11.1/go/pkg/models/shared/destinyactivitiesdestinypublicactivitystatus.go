package shared

// DestinyActivitiesDestinyPublicActivityStatus
// Represents the public-facing status of an activity: any data about what is currently active in the Activity, regardless of an individual character's progress in it.
type DestinyActivitiesDestinyPublicActivityStatus struct {
	ChallengeObjectiveHashes []int64
	ModifierHashes           []int64
	RewardTooltipItems       []DestinyDestinyItemQuantity
}
