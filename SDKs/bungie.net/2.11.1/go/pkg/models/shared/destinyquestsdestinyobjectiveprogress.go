package shared

// DestinyQuestsDestinyObjectiveProgress
// Returns data about a character's status with a given Objective. Combine with DestinyObjectiveDefinition static data for display purposes.
type DestinyQuestsDestinyObjectiveProgress struct {
	ActivityHash    *int64
	Complete        *bool
	CompletionValue *int32
	DestinationHash *int64
	ObjectiveHash   *int64
	Progress        *int32
	Visible         *bool
}
