package shared

// DestinyComponentsKiosksDestinyKioskItemFlavorObjective
// I may regret naming it this way - but this represents when an item has an objective that doesn't serve a beneficial purpose, but rather is used for "flavor" or additional information. For instance, when Emblems track specific stats, those stats are represented as Objectives on the item.
type DestinyComponentsKiosksDestinyKioskItemFlavorObjective struct {
	ActivityHash    *int64
	Complete        *bool
	CompletionValue *int32
	DestinationHash *int64
	ObjectiveHash   *int64
	Progress        *int32
	Visible         *bool
}

type DestinyComponentsKiosksDestinyKioskItem struct {
	CanAcquire      *bool
	FailureIndexes  []int32
	FlavorObjective *DestinyComponentsKiosksDestinyKioskItemFlavorObjective
	Index           *int32
}
