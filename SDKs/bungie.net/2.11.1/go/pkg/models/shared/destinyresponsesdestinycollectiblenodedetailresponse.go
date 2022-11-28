package shared

// DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents
// Item components, keyed by the item hash of the items pointed at collectibles found under the requested Presentation Node.
// NOTE: I had a lot of hemming and hawing about whether these should be keyed by collectible hash or item hash... but ultimately having it be keyed by item hash meant that UI that already uses DestinyItemComponentSet data wouldn't have to have a special override to do the collectible -> item lookup once you delve into an item's details, and it also meant that you didn't have to remember that the Hash being used as the key for plugSets was different from the Hash being used for the other Dictionaries. As a result, using the Item Hash felt like the least crappy solution.
// We may all come to regret this decision. We will see.
// COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
type DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents struct {
	Instances      *DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent
	Objectives     *DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent
	Perks          *DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent
	PlugObjectives *DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent
	PlugStates     *DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent
	RenderData     *DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent
	ReusablePlugs  *DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent
	Sockets        *DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent
	Stats          *DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent
	TalentGrids    *DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent
}

// DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles
// COMPONENT TYPE: Collectibles
type DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles struct {
	Data     *DestinyComponentsCollectiblesDestinyCollectiblesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyCollectibleNodeDetailResponse
// Returns the detailed information about a Collectible Presentation Node and any Collectibles that are direct descendants.
type DestinyResponsesDestinyCollectibleNodeDetailResponse struct {
	CollectibleItemComponents *DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents
	Collectibles              *DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles
}
