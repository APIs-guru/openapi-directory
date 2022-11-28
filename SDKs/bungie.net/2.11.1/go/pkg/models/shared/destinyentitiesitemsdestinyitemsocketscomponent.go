package shared

// DestinyEntitiesItemsDestinyItemSocketsComponent
// Instanced items can have sockets, which are slots on the item where plugs can be inserted.
// Sockets are a bit complex: be sure to examine the documentation on the DestinyInventoryItemDefinition's "socket" block and elsewhere on these objects for more details.
type DestinyEntitiesItemsDestinyItemSocketsComponent struct {
	Sockets []DestinyEntitiesItemsDestinyItemSocketState
}
