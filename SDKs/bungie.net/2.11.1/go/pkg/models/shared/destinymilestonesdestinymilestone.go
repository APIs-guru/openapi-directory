package shared

import (
	"time"
)

// DestinyMilestonesDestinyMilestone
// Represents a runtime instance of a user's milestone status. Live Milestone data should be combined with DestinyMilestoneDefinition data to show the user a picture of what is available for them to do in the game, and their status in regards to said "things to do." Consider it a big, wonky to-do list, or Advisors 3.0 for those who remember the Destiny 1 API.
type DestinyMilestonesDestinyMilestone struct {
	Activities      []DestinyMilestonesDestinyMilestoneChallengeActivity
	AvailableQuests []DestinyMilestonesDestinyMilestoneQuest
	EndDate         *time.Time
	MilestoneHash   *int64
	Order           *int32
	Rewards         []DestinyMilestonesDestinyMilestoneRewardCategory
	StartDate       *time.Time
	Values          map[string]float32
	VendorHashes    []int64
	Vendors         []DestinyMilestonesDestinyMilestoneVendor
}
