package shared

// DestinyMilestonesDestinyMilestoneRewardCategory
// Represents a category of "summary" rewards that can be earned for the Milestone regardless of specific quest rewards that can be earned.
type DestinyMilestonesDestinyMilestoneRewardCategory struct {
	Entries            []DestinyMilestonesDestinyMilestoneRewardEntry
	RewardCategoryHash *int64
}
