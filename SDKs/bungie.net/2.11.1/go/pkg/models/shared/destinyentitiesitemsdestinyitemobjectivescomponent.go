package shared

import (
	"time"
)

// DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective
// I may regret naming it this way - but this represents when an item has an objective that doesn't serve a beneficial purpose, but rather is used for "flavor" or additional information. For instance, when Emblems track specific stats, those stats are represented as Objectives on the item.
type DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective struct {
	ActivityHash    *int64
	Complete        *bool
	CompletionValue *int32
	DestinationHash *int64
	ObjectiveHash   *int64
	Progress        *int32
	Visible         *bool
}

// DestinyEntitiesItemsDestinyItemObjectivesComponent
// Items can have objectives and progression. When you request this block, you will obtain information about any Objectives and progression tied to this item.
type DestinyEntitiesItemsDestinyItemObjectivesComponent struct {
	DateCompleted   *time.Time
	FlavorObjective *DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective
	Objectives      []DestinyQuestsDestinyObjectiveProgress
}
