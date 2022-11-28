package shared

import (
	"time"
)

// TrendingTrendingEntryDestinyRitualEventContent
// A destiny event will not necessarily have milestone "custom content", but if it does the details will be here.
type TrendingTrendingEntryDestinyRitualEventContent struct {
	About          *string
	ItemCategories []DestinyMilestonesDestinyMilestoneContentItemCategory
	Status         *string
	Tips           []string
}

// TrendingTrendingEntryDestinyRitualMilestoneDetails
// A destiny event does not necessarily have a related Milestone, but if it does the details will be returned here.
type TrendingTrendingEntryDestinyRitualMilestoneDetails struct {
	Activities      []DestinyMilestonesDestinyPublicMilestoneChallengeActivity
	AvailableQuests []DestinyMilestonesDestinyPublicMilestoneQuest
	EndDate         *time.Time
	MilestoneHash   *int64
	Order           *int32
	StartDate       *time.Time
	VendorHashes    []int64
	Vendors         []DestinyMilestonesDestinyPublicMilestoneVendor
}

type TrendingTrendingEntryDestinyRitual struct {
	DateEnd          *time.Time
	DateStart        *time.Time
	EventContent     *TrendingTrendingEntryDestinyRitualEventContent
	Icon             *string
	Image            *string
	MilestoneDetails *TrendingTrendingEntryDestinyRitualMilestoneDetails
	Subtitle         *string
	Title            *string
}
