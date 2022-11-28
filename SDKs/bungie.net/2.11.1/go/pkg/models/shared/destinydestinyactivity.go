package shared

// DestinyDestinyActivity
// Represents the "Live" data that we can obtain about a Character's status with a specific Activity. This will tell you whether the character can participate in the activity, as well as some other basic mutable information.
// Meant to be combined with static DestinyActivityDefinition data for a full picture of the Activity.
type DestinyDestinyActivity struct {
	ActivityHash            *int64
	BooleanActivityOptions  map[string]bool
	CanJoin                 *bool
	CanLead                 *bool
	Challenges              []DestinyChallengesDestinyChallengeStatus
	DifficultyTier          *int32
	DisplayLevel            *int32
	IsCompleted             *bool
	IsNew                   *bool
	IsVisible               *bool
	LoadoutRequirementIndex *int32
	ModifierHashes          []int64
	RecommendedLight        *int32
}
