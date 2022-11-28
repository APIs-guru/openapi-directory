package shared

import (
	"time"
)

// DestinyEntitiesItemsDestinyItemComponentMetricObjective
// The objective progress for the currently-selected metric definition, to be displayed on the emblem nameplate.
type DestinyEntitiesItemsDestinyItemComponentMetricObjective struct {
	ActivityHash    *int64
	Complete        *bool
	CompletionValue *int32
	DestinationHash *int64
	ObjectiveHash   *int64
	Progress        *int32
	Visible         *bool
}

// DestinyEntitiesItemsDestinyItemComponent
// The base item component, filled with properties that are generally useful to know in any item request or that don't feel worthwhile to put in their own component.
type DestinyEntitiesItemsDestinyItemComponent struct {
	BindStatus                 *int32
	BucketHash                 *int64
	ExpirationDate             *time.Time
	IsWrapper                  *bool
	ItemHash                   *int64
	ItemInstanceID             *int64
	ItemValueVisibility        []bool
	Location                   *int32
	Lockable                   *bool
	MetricHash                 *int64
	MetricObjective            *DestinyEntitiesItemsDestinyItemComponentMetricObjective
	OverrideStyleItemHash      *int64
	Quantity                   *int32
	State                      *int32
	TooltipNotificationIndexes []int32
	TransferStatus             *int32
	VersionNumber              *int32
}
