package shared

import (
	"time"
)

// DestinyMilestonesDestinyPublicMilestone
// Information about milestones, presented in a character state-agnostic manner. Combine this data with DestinyMilestoneDefinition to get a full picture of the milestone, which is basically a checklist of things to do in the game. Think of this as GetPublicAdvisors 3.0, for those who used the Destiny 1 API.
type DestinyMilestonesDestinyPublicMilestone struct {
	Activities      []DestinyMilestonesDestinyPublicMilestoneChallengeActivity
	AvailableQuests []DestinyMilestonesDestinyPublicMilestoneQuest
	EndDate         *time.Time
	MilestoneHash   *int64
	Order           *int32
	StartDate       *time.Time
	VendorHashes    []int64
	Vendors         []DestinyMilestonesDestinyPublicMilestoneVendor
}
