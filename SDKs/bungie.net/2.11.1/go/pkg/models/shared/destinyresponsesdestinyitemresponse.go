package shared

// DestinyResponsesDestinyItemResponseInstance
// Basic instance data for the item.
// COMPONENT TYPE: ItemInstances
type DestinyResponsesDestinyItemResponseInstance struct {
	Data     *DestinyEntitiesItemsDestinyItemInstanceComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyItemResponseItem
// Common data for the item relevant to its non-instanced properties.
// COMPONENT TYPE: ItemCommonData
type DestinyResponsesDestinyItemResponseItem struct {
	Data     *DestinyEntitiesItemsDestinyItemComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyItemResponseObjectives
// Information specifically about the item's objectives.
// COMPONENT TYPE: ItemObjectives
type DestinyResponsesDestinyItemResponseObjectives struct {
	Data     *DestinyEntitiesItemsDestinyItemObjectivesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyItemResponsePerks
// Information specifically about the perks currently active on the item.
// COMPONENT TYPE: ItemPerks
type DestinyResponsesDestinyItemResponsePerks struct {
	Data     *DestinyEntitiesItemsDestinyItemPerksComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyItemResponsePlugObjectives
// Information about objectives on Plugs for a given item. See the component's documentation for more info.
// COMPONENT TYPE: ItemPlugObjectives
type DestinyResponsesDestinyItemResponsePlugObjectives struct {
	Data     *DestinyComponentsItemsDestinyItemPlugObjectivesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyItemResponseRenderData
// Information about how to render the item in 3D.
// COMPONENT TYPE: ItemRenderData
type DestinyResponsesDestinyItemResponseRenderData struct {
	Data     *DestinyEntitiesItemsDestinyItemRenderComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyItemResponseReusablePlugs
// Information about the Reusable Plugs for sockets on an item. These are plugs that you can insert into the given socket regardless of if you actually own an instance of that plug: they are logic-driven plugs rather than inventory-driven.
//
//	These may need to be combined with Plug Set component data to get a full picture of available plugs on a given socket.
//	COMPONENT TYPE: ItemReusablePlugs
type DestinyResponsesDestinyItemResponseReusablePlugs struct {
	Data     *DestinyComponentsItemsDestinyItemReusablePlugsComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyItemResponseSockets
// Information about the sockets of the item: which are currently active, what potential sockets you could have and the stats/abilities/perks you can gain from them.
// COMPONENT TYPE: ItemSockets
type DestinyResponsesDestinyItemResponseSockets struct {
	Data     *DestinyEntitiesItemsDestinyItemSocketsComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyItemResponseStats
// Information about the computed stats of the item: power, defense, etc...
// COMPONENT TYPE: ItemStats
type DestinyResponsesDestinyItemResponseStats struct {
	Data     *DestinyEntitiesItemsDestinyItemStatsComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyItemResponseTalentGrid
// Information about the talent grid attached to the item. Talent nodes can provide a variety of benefits and abilities, and in Destiny 2 are used almost exclusively for the character's "Builds".
// COMPONENT TYPE: ItemTalentGrids
type DestinyResponsesDestinyItemResponseTalentGrid struct {
	Data     *DestinyEntitiesItemsDestinyItemTalentGridComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyItemResponse
// The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an "itemInstanceId": for those, get your information from the DestinyInventoryDefinition.
type DestinyResponsesDestinyItemResponse struct {
	CharacterID    *int64
	Instance       *DestinyResponsesDestinyItemResponseInstance
	Item           *DestinyResponsesDestinyItemResponseItem
	Objectives     *DestinyResponsesDestinyItemResponseObjectives
	Perks          *DestinyResponsesDestinyItemResponsePerks
	PlugObjectives *DestinyResponsesDestinyItemResponsePlugObjectives
	RenderData     *DestinyResponsesDestinyItemResponseRenderData
	ReusablePlugs  *DestinyResponsesDestinyItemResponseReusablePlugs
	Sockets        *DestinyResponsesDestinyItemResponseSockets
	Stats          *DestinyResponsesDestinyItemResponseStats
	TalentGrid     *DestinyResponsesDestinyItemResponseTalentGrid
}
