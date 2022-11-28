package shared

// DestinyComponentsPresentationDestinyPresentationNodeComponentObjective
// An optional property: presentation nodes MAY have objectives, which can be used to infer more human readable data about the progress. However, progressValue and completionValue ought to be considered the canonical values for progress on Progression Nodes.
type DestinyComponentsPresentationDestinyPresentationNodeComponentObjective struct {
	ActivityHash    *int64
	Complete        *bool
	CompletionValue *int32
	DestinationHash *int64
	ObjectiveHash   *int64
	Progress        *int32
	Visible         *bool
}

type DestinyComponentsPresentationDestinyPresentationNodeComponent struct {
	CompletionValue     *int32
	Objective           *DestinyComponentsPresentationDestinyPresentationNodeComponentObjective
	ProgressValue       *int32
	RecordCategoryScore *int32
	State               *int32
}
