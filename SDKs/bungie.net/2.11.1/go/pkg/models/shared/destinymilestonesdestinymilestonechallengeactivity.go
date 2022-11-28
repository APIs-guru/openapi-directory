package shared

type DestinyMilestonesDestinyMilestoneChallengeActivity struct {
	ActivityHash            *int64
	BooleanActivityOptions  map[string]bool
	Challenges              []DestinyChallengesDestinyChallengeStatus
	LoadoutRequirementIndex *int32
	ModifierHashes          []int64
	Phases                  []DestinyMilestonesDestinyMilestoneActivityPhase
}
