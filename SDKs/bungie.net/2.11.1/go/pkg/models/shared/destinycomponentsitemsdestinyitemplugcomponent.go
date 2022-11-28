package shared

// DestinyComponentsItemsDestinyItemPlugComponent
// Plugs are non-instanced items that can provide Stat and Perk benefits when socketed into an instanced item. Items have Sockets, and Plugs are inserted into Sockets.
// This component finds all items that are considered "Plugs" in your inventory, and return information about the plug aside from any specific Socket into which it could be inserted.
type DestinyComponentsItemsDestinyItemPlugComponent struct {
	CanInsert         *bool
	EnableFailIndexes []int32
	Enabled           *bool
	InsertFailIndexes []int32
	PlugItemHash      *int64
	PlugObjectives    []DestinyQuestsDestinyObjectiveProgress
}
