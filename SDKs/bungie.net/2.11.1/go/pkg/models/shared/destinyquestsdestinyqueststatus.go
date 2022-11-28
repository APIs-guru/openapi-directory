package shared

// DestinyQuestsDestinyQuestStatus
// Data regarding the progress of a Quest for a specific character. Quests are composed of multiple steps, each with potentially multiple objectives: this QuestStatus will return Objective data for the *currently active* step in this quest.
type DestinyQuestsDestinyQuestStatus struct {
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
