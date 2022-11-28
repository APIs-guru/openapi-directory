package shared

type DestinyItemComponentSetOfint32 struct {
	Instances      *DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent
	Objectives     *DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent
	Perks          *DictionaryComponentResponseOfint32AndDestinyItemPerksComponent
	PlugObjectives *DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent
	PlugStates     *DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent
	RenderData     *DictionaryComponentResponseOfint32AndDestinyItemRenderComponent
	ReusablePlugs  *DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent
	Sockets        *DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent
	Stats          *DictionaryComponentResponseOfint32AndDestinyItemStatsComponent
	TalentGrids    *DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent
}
