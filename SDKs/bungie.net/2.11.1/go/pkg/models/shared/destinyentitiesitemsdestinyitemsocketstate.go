package shared

// DestinyEntitiesItemsDestinyItemSocketState
// The status of a given item's socket. (which plug is inserted, if any: whether it is enabled, what "reusable" plugs can be inserted, etc...)
// If I had it to do over, this would probably have a DestinyItemPlug representing the inserted item instead of most of these properties. :shrug:
type DestinyEntitiesItemsDestinyItemSocketState struct {
	EnableFailIndexes []int32
	IsEnabled         *bool
	IsVisible         *bool
	PlugHash          *int64
}
