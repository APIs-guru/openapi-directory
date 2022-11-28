package shared

// DestinyResponsesDestinyProfileResponseCharacterActivities
// Character activity data - the activities available to this character and its status, keyed by the Character's Id.
// COMPONENT TYPE: CharacterActivities
type DestinyResponsesDestinyProfileResponseCharacterActivities struct {
	Data     map[string]DestinyEntitiesCharactersDestinyCharacterActivitiesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseCharacterCollectibles
// COMPONENT TYPE: Collectibles
type DestinyResponsesDestinyProfileResponseCharacterCollectibles struct {
	Data     map[string]DestinyComponentsCollectiblesDestinyCollectiblesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups
// A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
// COMPONENT TYPE: CurrencyLookups
type DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups struct {
	Data     map[string]DestinyComponentsInventoryDestinyCurrenciesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseCharacterEquipment
// The character's equipped items, keyed by the Character's Id.
// COMPONENT TYPE: CharacterEquipment
type DestinyResponsesDestinyProfileResponseCharacterEquipment struct {
	Data     map[string]DestinyEntitiesInventoryDestinyInventoryComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseCharacterInventories
// The character-level non-equipped inventory items, keyed by the Character's Id.
// COMPONENT TYPE: CharacterInventories
type DestinyResponsesDestinyProfileResponseCharacterInventories struct {
	Data     map[string]DestinyEntitiesInventoryDestinyInventoryComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseCharacterKiosks
// Items available from Kiosks that are available to a specific character as opposed to the account as a whole. It must be combined with data from the profileKiosks property to get a full picture of the character's available items to check out of a kiosk.
// This component returns information about what Kiosk items are available to you on a *Character* level. Usually, kiosk items will be earned for the entire Profile (all characters) at once. To find those, look in the profileKiosks property.
// COMPONENT TYPE: Kiosks
type DestinyResponsesDestinyProfileResponseCharacterKiosks struct {
	Data     map[string]DestinyComponentsKiosksDestinyKiosksComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseCharacterPlugSets
// When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states, per character, that are character-scoped.
// This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
// COMPONENT TYPE: ItemSockets
type DestinyResponsesDestinyProfileResponseCharacterPlugSets struct {
	Data     map[string]DestinyComponentsPlugSetsDestinyPlugSetsComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseCharacterPresentationNodes
// COMPONENT TYPE: PresentationNodes
type DestinyResponsesDestinyProfileResponseCharacterPresentationNodes struct {
	Data     map[string]DestinyComponentsPresentationDestinyPresentationNodesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseCharacterProgressions
// Character-level progression data, keyed by the Character's Id.
// COMPONENT TYPE: CharacterProgressions
type DestinyResponsesDestinyProfileResponseCharacterProgressions struct {
	Data     map[string]DestinyEntitiesCharactersDestinyCharacterProgressionComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseCharacterRecords
// COMPONENT TYPE: Records
type DestinyResponsesDestinyProfileResponseCharacterRecords struct {
	Data     map[string]DestinyComponentsRecordsDestinyCharacterRecordsComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseCharacterRenderData
// Character rendering data - a minimal set of info needed to render a character in 3D - keyed by the Character's Id.
// COMPONENT TYPE: CharacterRenderData
type DestinyResponsesDestinyProfileResponseCharacterRenderData struct {
	Data     map[string]DestinyEntitiesCharactersDestinyCharacterRenderComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseCharacterStringVariables
// COMPONENT TYPE: StringVariables
type DestinyResponsesDestinyProfileResponseCharacterStringVariables struct {
	Data     map[string]DestinyComponentsStringVariablesDestinyStringVariablesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseCharacters
// Basic information about each character, keyed by the CharacterId.
// COMPONENT TYPE: Characters
type DestinyResponsesDestinyProfileResponseCharacters struct {
	Data     map[string]DestinyEntitiesCharactersDestinyCharacterComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseItemComponents
// Information about instanced items across all returned characters, keyed by the item's instance ID.
// COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
type DestinyResponsesDestinyProfileResponseItemComponents struct {
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

// DestinyResponsesDestinyProfileResponseMetrics
// COMPONENT TYPE: Metrics
type DestinyResponsesDestinyProfileResponseMetrics struct {
	Data     *DestinyComponentsMetricsDestinyMetricsComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponsePlatformSilver
// Silver quantities for any platform on which this Profile plays destiny.
//
//	COMPONENT TYPE: PlatformSilver
type DestinyResponsesDestinyProfileResponsePlatformSilver struct {
	Data     *DestinyComponentsInventoryDestinyPlatformSilverComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseProfile
// The basic information about the Destiny Profile (formerly "Account").
// COMPONENT TYPE: Profiles
type DestinyResponsesDestinyProfileResponseProfile struct {
	Data     *DestinyEntitiesProfilesDestinyProfileComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseProfileCollectibles
// COMPONENT TYPE: Collectibles
type DestinyResponsesDestinyProfileResponseProfileCollectibles struct {
	Data     *DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseProfileCurrencies
// The profile-level currencies owned by the Destiny Profile.
// COMPONENT TYPE: ProfileCurrencies
type DestinyResponsesDestinyProfileResponseProfileCurrencies struct {
	Data     *DestinyEntitiesInventoryDestinyInventoryComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseProfileInventory
// The profile-level inventory of the Destiny Profile.
// COMPONENT TYPE: ProfileInventories
type DestinyResponsesDestinyProfileResponseProfileInventory struct {
	Data     *DestinyEntitiesInventoryDestinyInventoryComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseProfileKiosks
// Items available from Kiosks that are available Profile-wide (i.e. across all characters)
// This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the characterKiosks property.
// COMPONENT TYPE: Kiosks
type DestinyResponsesDestinyProfileResponseProfileKiosks struct {
	Data     *DestinyComponentsKiosksDestinyKiosksComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseProfilePlugSets
// When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are profile-scoped.
// This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
// COMPONENT TYPE: ItemSockets
type DestinyResponsesDestinyProfileResponseProfilePlugSets struct {
	Data     *DestinyComponentsPlugSetsDestinyPlugSetsComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseProfilePresentationNodes
// COMPONENT TYPE: PresentationNodes
type DestinyResponsesDestinyProfileResponseProfilePresentationNodes struct {
	Data     *DestinyComponentsPresentationDestinyPresentationNodesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseProfileProgression
// When we have progression information - such as Checklists - that may apply profile-wide, it will be returned here rather than in the per-character progression data.
// COMPONENT TYPE: ProfileProgression
type DestinyResponsesDestinyProfileResponseProfileProgression struct {
	Data     *DestinyComponentsProfilesDestinyProfileProgressionComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseProfileRecords
// COMPONENT TYPE: Records
type DestinyResponsesDestinyProfileResponseProfileRecords struct {
	Data     *DestinyComponentsRecordsDestinyProfileRecordsComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseProfileStringVariables
// COMPONENT TYPE: StringVariables
type DestinyResponsesDestinyProfileResponseProfileStringVariables struct {
	Data     *DestinyComponentsStringVariablesDestinyStringVariablesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseProfileTransitoryData
// COMPONENT TYPE: Transitory
type DestinyResponsesDestinyProfileResponseProfileTransitoryData struct {
	Data     *DestinyComponentsProfilesDestinyProfileTransitoryComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponseVendorReceipts
// Recent, refundable purchases you have made from vendors. When will you use it? Couldn't say...
// COMPONENT TYPE: VendorReceipts
type DestinyResponsesDestinyProfileResponseVendorReceipts struct {
	Data     *DestinyEntitiesProfilesDestinyVendorReceiptsComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyProfileResponse
// The response for GetDestinyProfile, with components for character and item-level data.
type DestinyResponsesDestinyProfileResponse struct {
	CharacterActivities                *DestinyResponsesDestinyProfileResponseCharacterActivities
	CharacterCollectibles              *DestinyResponsesDestinyProfileResponseCharacterCollectibles
	CharacterCurrencyLookups           *DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups
	CharacterEquipment                 *DestinyResponsesDestinyProfileResponseCharacterEquipment
	CharacterInventories               *DestinyResponsesDestinyProfileResponseCharacterInventories
	CharacterKiosks                    *DestinyResponsesDestinyProfileResponseCharacterKiosks
	CharacterPlugSets                  *DestinyResponsesDestinyProfileResponseCharacterPlugSets
	CharacterPresentationNodes         *DestinyResponsesDestinyProfileResponseCharacterPresentationNodes
	CharacterProgressions              *DestinyResponsesDestinyProfileResponseCharacterProgressions
	CharacterRecords                   *DestinyResponsesDestinyProfileResponseCharacterRecords
	CharacterRenderData                *DestinyResponsesDestinyProfileResponseCharacterRenderData
	CharacterStringVariables           *DestinyResponsesDestinyProfileResponseCharacterStringVariables
	CharacterUninstancedItemComponents map[string]DestinyBaseItemComponentSetOfuint32
	Characters                         *DestinyResponsesDestinyProfileResponseCharacters
	ItemComponents                     *DestinyResponsesDestinyProfileResponseItemComponents
	Metrics                            *DestinyResponsesDestinyProfileResponseMetrics
	PlatformSilver                     *DestinyResponsesDestinyProfileResponsePlatformSilver
	Profile                            *DestinyResponsesDestinyProfileResponseProfile
	ProfileCollectibles                *DestinyResponsesDestinyProfileResponseProfileCollectibles
	ProfileCurrencies                  *DestinyResponsesDestinyProfileResponseProfileCurrencies
	ProfileInventory                   *DestinyResponsesDestinyProfileResponseProfileInventory
	ProfileKiosks                      *DestinyResponsesDestinyProfileResponseProfileKiosks
	ProfilePlugSets                    *DestinyResponsesDestinyProfileResponseProfilePlugSets
	ProfilePresentationNodes           *DestinyResponsesDestinyProfileResponseProfilePresentationNodes
	ProfileProgression                 *DestinyResponsesDestinyProfileResponseProfileProgression
	ProfileRecords                     *DestinyResponsesDestinyProfileResponseProfileRecords
	ProfileStringVariables             *DestinyResponsesDestinyProfileResponseProfileStringVariables
	ProfileTransitoryData              *DestinyResponsesDestinyProfileResponseProfileTransitoryData
	VendorReceipts                     *DestinyResponsesDestinyProfileResponseVendorReceipts
}
