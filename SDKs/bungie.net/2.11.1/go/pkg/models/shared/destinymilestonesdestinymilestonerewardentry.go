package shared

// DestinyMilestonesDestinyMilestoneRewardEntry
// The character-specific data for a milestone's reward entry. See DestinyMilestoneDefinition for more information about Reward Entries.
type DestinyMilestonesDestinyMilestoneRewardEntry struct {
	Earned          *bool
	Redeemed        *bool
	RewardEntryHash *int64
}
