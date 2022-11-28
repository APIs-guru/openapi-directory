package shared

// DestinyResponsesDestinyCharacterResponseActivities
// Activity data - info about current activities available to the player.
// COMPONENT TYPE: CharacterActivities
type DestinyResponsesDestinyCharacterResponseActivities struct {
	Data     *DestinyEntitiesCharactersDestinyCharacterActivitiesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyCharacterResponseCharacter
// Base information about the character in question.
// COMPONENT TYPE: Characters
type DestinyResponsesDestinyCharacterResponseCharacter struct {
	Data     *DestinyEntitiesCharactersDestinyCharacterComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyCharacterResponseCollectibles
// COMPONENT TYPE: Collectibles
type DestinyResponsesDestinyCharacterResponseCollectibles struct {
	Data     *DestinyComponentsCollectiblesDestinyCollectiblesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyCharacterResponseCurrencyLookups
// A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
// COMPONENT TYPE: CurrencyLookups
type DestinyResponsesDestinyCharacterResponseCurrencyLookups struct {
	Data     *DestinyComponentsInventoryDestinyCurrenciesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyCharacterResponseEquipment
// Equipped items on the character.
// COMPONENT TYPE: CharacterEquipment
type DestinyResponsesDestinyCharacterResponseEquipment struct {
	Data     *DestinyEntitiesInventoryDestinyInventoryComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyCharacterResponseInventory
// The character-level non-equipped inventory items.
// COMPONENT TYPE: CharacterInventories
type DestinyResponsesDestinyCharacterResponseInventory struct {
	Data     *DestinyEntitiesInventoryDestinyInventoryComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyCharacterResponseItemComponents
// The set of components belonging to the player's instanced items.
// COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
type DestinyResponsesDestinyCharacterResponseItemComponents struct {
	Instances      *DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent
	Objectives     *DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent
	Perks          *DictionaryComponentResponseOfint64AndDestinyItemPerksComponent
	PlugObjectives *DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent
	PlugStates     *DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent
	RenderData     *DictionaryComponentResponseOfint64AndDestinyItemRenderComponent
	ReusablePlugs  *DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent
	Sockets        *DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent
	Stats          *DictionaryComponentResponseOfint64AndDestinyItemStatsComponent
	TalentGrids    *DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent
}

// DestinyResponsesDestinyCharacterResponseKiosks
// Items available from Kiosks that are available to this specific character.
// COMPONENT TYPE: Kiosks
type DestinyResponsesDestinyCharacterResponseKiosks struct {
	Data     *DestinyComponentsKiosksDestinyKiosksComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyCharacterResponsePlugSets
// When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are scoped to this character.
// This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
// COMPONENT TYPE: ItemSockets
type DestinyResponsesDestinyCharacterResponsePlugSets struct {
	Data     *DestinyComponentsPlugSetsDestinyPlugSetsComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyCharacterResponsePresentationNodes
// COMPONENT TYPE: PresentationNodes
type DestinyResponsesDestinyCharacterResponsePresentationNodes struct {
	Data     *DestinyComponentsPresentationDestinyPresentationNodesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyCharacterResponseProgressions
// Character progression data, including Milestones.
// COMPONENT TYPE: CharacterProgressions
type DestinyResponsesDestinyCharacterResponseProgressions struct {
	Data     *DestinyEntitiesCharactersDestinyCharacterProgressionComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyCharacterResponseRecords
// COMPONENT TYPE: Records
type DestinyResponsesDestinyCharacterResponseRecords struct {
	Data     *DestinyComponentsRecordsDestinyCharacterRecordsComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyCharacterResponseRenderData
// Character rendering data - a minimal set of information about equipment and dyes used for rendering.
// COMPONENT TYPE: CharacterRenderData
type DestinyResponsesDestinyCharacterResponseRenderData struct {
	Data     *DestinyEntitiesCharactersDestinyCharacterRenderComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyCharacterResponseUninstancedItemComponents
// The set of components belonging to the player's UNinstanced items. Because apparently now those too can have information relevant to the character's state.
// COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
type DestinyResponsesDestinyCharacterResponseUninstancedItemComponents struct {
	Objectives *DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent
}

// DestinyResponsesDestinyCharacterResponse
// The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.
type DestinyResponsesDestinyCharacterResponse struct {
	Activities                *DestinyResponsesDestinyCharacterResponseActivities
	Character                 *DestinyResponsesDestinyCharacterResponseCharacter
	Collectibles              *DestinyResponsesDestinyCharacterResponseCollectibles
	CurrencyLookups           *DestinyResponsesDestinyCharacterResponseCurrencyLookups
	Equipment                 *DestinyResponsesDestinyCharacterResponseEquipment
	Inventory                 *DestinyResponsesDestinyCharacterResponseInventory
	ItemComponents            *DestinyResponsesDestinyCharacterResponseItemComponents
	Kiosks                    *DestinyResponsesDestinyCharacterResponseKiosks
	PlugSets                  *DestinyResponsesDestinyCharacterResponsePlugSets
	PresentationNodes         *DestinyResponsesDestinyCharacterResponsePresentationNodes
	Progressions              *DestinyResponsesDestinyCharacterResponseProgressions
	Records                   *DestinyResponsesDestinyCharacterResponseRecords
	RenderData                *DestinyResponsesDestinyCharacterResponseRenderData
	UninstancedItemComponents *DestinyResponsesDestinyCharacterResponseUninstancedItemComponents
}
