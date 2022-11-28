package shared

// DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus
// An OPTIONAL component: if it makes sense to talk about this activity variant in terms of whether or not it has been completed or what progress you have made in it, this will be returned. Otherwise, this will be NULL.
type DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus struct {
	Completed *bool
	Phases    []DestinyMilestonesDestinyMilestoneActivityPhase
}

// DestinyMilestonesDestinyMilestoneActivityVariant
// Represents custom data that we know about an individual variant of an activity.
type DestinyMilestonesDestinyMilestoneActivityVariant struct {
	ActivityHash     *int64
	ActivityModeHash *int64
	ActivityModeType *int32
	CompletionStatus *DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus
}
