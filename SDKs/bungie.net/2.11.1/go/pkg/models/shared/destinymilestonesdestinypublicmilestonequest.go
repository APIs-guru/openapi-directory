package shared

// DestinyMilestonesDestinyPublicMilestoneQuestActivity
// A milestone need not have an active activity, but if there is one it will be returned here, along with any variant and additional information.
type DestinyMilestonesDestinyPublicMilestoneQuestActivity struct {
	ActivityHash     *int64
	ActivityModeHash *int64
	ActivityModeType *int32
	ModifierHashes   []int64
	Variants         []DestinyMilestonesDestinyPublicMilestoneActivityVariant
}

type DestinyMilestonesDestinyPublicMilestoneQuest struct {
	Activity      *DestinyMilestonesDestinyPublicMilestoneQuestActivity
	Challenges    []DestinyMilestonesDestinyPublicMilestoneChallenge
	QuestItemHash *int64
}
