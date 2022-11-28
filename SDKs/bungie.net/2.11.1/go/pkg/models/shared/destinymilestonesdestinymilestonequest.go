package shared

// DestinyMilestonesDestinyMilestoneQuestActivity
// *IF* the Milestone has an active Activity that can give you greater details about what you need to do, it will be returned here. Remember to associate this with the DestinyMilestoneDefinition's activities to get details about the activity, including what specific quest it is related to if you have multiple quests to choose from.
type DestinyMilestonesDestinyMilestoneQuestActivity struct {
	ActivityHash     *int64
	ActivityModeHash *int64
	ActivityModeType *int32
	ModifierHashes   []int64
	Variants         []DestinyMilestonesDestinyMilestoneActivityVariant
}

// DestinyMilestonesDestinyMilestoneQuestStatus
// The current status of the quest for the character making the request.
type DestinyMilestonesDestinyMilestoneQuestStatus struct {
	Completed      *bool
	ItemInstanceID *int64
	QuestHash      *int64
	Redeemed       *bool
	Started        *bool
	StepHash       *int64
	StepObjectives []DestinyQuestsDestinyObjectiveProgress
	Tracked        *bool
	VendorHash     *int64
}

// DestinyMilestonesDestinyMilestoneQuest
// If a Milestone has one or more Quests, this will contain the live information for the character's status with one of those quests.
type DestinyMilestonesDestinyMilestoneQuest struct {
	Activity      *DestinyMilestonesDestinyMilestoneQuestActivity
	Challenges    []DestinyChallengesDestinyChallengeStatus
	QuestItemHash *int64
	Status        *DestinyMilestonesDestinyMilestoneQuestStatus
}
