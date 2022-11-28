import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesCharactersDestinyCharacterActivitiesComponent } from "./destinyentitiescharactersdestinycharacteractivitiescomponent";
import { DestinyEntitiesCharactersDestinyCharacterComponent } from "./destinyentitiescharactersdestinycharactercomponent";
import { DestinyComponentsCollectiblesDestinyCollectiblesComponent } from "./destinycomponentscollectiblesdestinycollectiblescomponent";
import { DestinyComponentsInventoryDestinyCurrenciesComponent } from "./destinycomponentsinventorydestinycurrenciescomponent";
import { DestinyEntitiesInventoryDestinyInventoryComponent } from "./destinyentitiesinventorydestinyinventorycomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent } from "./dictionarycomponentresponseofint64anddestinyiteminstancecomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent } from "./dictionarycomponentresponseofint64anddestinyitemobjectivescomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemPerksComponent } from "./dictionarycomponentresponseofint64anddestinyitemperkscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent } from "./dictionarycomponentresponseofint64anddestinyitemplugobjectivescomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from "./dictionarycomponentresponseofuint32anddestinyitemplugcomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemRenderComponent } from "./dictionarycomponentresponseofint64anddestinyitemrendercomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent } from "./dictionarycomponentresponseofint64anddestinyitemreusableplugscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent } from "./dictionarycomponentresponseofint64anddestinyitemsocketscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemStatsComponent } from "./dictionarycomponentresponseofint64anddestinyitemstatscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent } from "./dictionarycomponentresponseofint64anddestinyitemtalentgridcomponent";
import { DestinyComponentsKiosksDestinyKiosksComponent } from "./destinycomponentskiosksdestinykioskscomponent";
import { DestinyComponentsPlugSetsDestinyPlugSetsComponent } from "./destinycomponentsplugsetsdestinyplugsetscomponent";
import { DestinyComponentsPresentationDestinyPresentationNodesComponent } from "./destinycomponentspresentationdestinypresentationnodescomponent";
import { DestinyEntitiesCharactersDestinyCharacterProgressionComponent } from "./destinyentitiescharactersdestinycharacterprogressioncomponent";
import { DestinyComponentsRecordsDestinyCharacterRecordsComponent } from "./destinycomponentsrecordsdestinycharacterrecordscomponent";
import { DestinyEntitiesCharactersDestinyCharacterRenderComponent } from "./destinyentitiescharactersdestinycharacterrendercomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent } from "./dictionarycomponentresponseofuint32anddestinyitemobjectivescomponent";



// DestinyResponsesDestinyCharacterResponseActivities
/** 
 * Activity data - info about current activities available to the player.
 * COMPONENT TYPE: CharacterActivities
**/
export class DestinyResponsesDestinyCharacterResponseActivities extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesCharactersDestinyCharacterActivitiesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyCharacterResponseCharacter
/** 
 * Base information about the character in question.
 * COMPONENT TYPE: Characters
**/
export class DestinyResponsesDestinyCharacterResponseCharacter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesCharactersDestinyCharacterComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyCharacterResponseCollectibles
/** 
 * COMPONENT TYPE: Collectibles
**/
export class DestinyResponsesDestinyCharacterResponseCollectibles extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsCollectiblesDestinyCollectiblesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyCharacterResponseCurrencyLookups
/** 
 * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
 * COMPONENT TYPE: CurrencyLookups
**/
export class DestinyResponsesDestinyCharacterResponseCurrencyLookups extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsInventoryDestinyCurrenciesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyCharacterResponseEquipment
/** 
 * Equipped items on the character.
 * COMPONENT TYPE: CharacterEquipment
**/
export class DestinyResponsesDestinyCharacterResponseEquipment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesInventoryDestinyInventoryComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyCharacterResponseInventory
/** 
 * The character-level non-equipped inventory items.
 * COMPONENT TYPE: CharacterInventories
**/
export class DestinyResponsesDestinyCharacterResponseInventory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesInventoryDestinyInventoryComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyCharacterResponseItemComponents
/** 
 * The set of components belonging to the player's instanced items.
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
**/
export class DestinyResponsesDestinyCharacterResponseItemComponents extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instances?: DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent;

  @SpeakeasyMetadata()
  objectives?: DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent;

  @SpeakeasyMetadata()
  perks?: DictionaryComponentResponseOfint64AndDestinyItemPerksComponent;

  @SpeakeasyMetadata()
  plugObjectives?: DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent;

  @SpeakeasyMetadata()
  plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;

  @SpeakeasyMetadata()
  renderData?: DictionaryComponentResponseOfint64AndDestinyItemRenderComponent;

  @SpeakeasyMetadata()
  reusablePlugs?: DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent;

  @SpeakeasyMetadata()
  sockets?: DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent;

  @SpeakeasyMetadata()
  stats?: DictionaryComponentResponseOfint64AndDestinyItemStatsComponent;

  @SpeakeasyMetadata()
  talentGrids?: DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent;
}


// DestinyResponsesDestinyCharacterResponseKiosks
/** 
 * Items available from Kiosks that are available to this specific character. 
 * COMPONENT TYPE: Kiosks
**/
export class DestinyResponsesDestinyCharacterResponseKiosks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsKiosksDestinyKiosksComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyCharacterResponsePlugSets
/** 
 * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are scoped to this character.
 * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
 * COMPONENT TYPE: ItemSockets
**/
export class DestinyResponsesDestinyCharacterResponsePlugSets extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsPlugSetsDestinyPlugSetsComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyCharacterResponsePresentationNodes
/** 
 * COMPONENT TYPE: PresentationNodes
**/
export class DestinyResponsesDestinyCharacterResponsePresentationNodes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsPresentationDestinyPresentationNodesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyCharacterResponseProgressions
/** 
 * Character progression data, including Milestones.
 * COMPONENT TYPE: CharacterProgressions
**/
export class DestinyResponsesDestinyCharacterResponseProgressions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesCharactersDestinyCharacterProgressionComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyCharacterResponseRecords
/** 
 * COMPONENT TYPE: Records
**/
export class DestinyResponsesDestinyCharacterResponseRecords extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsRecordsDestinyCharacterRecordsComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyCharacterResponseRenderData
/** 
 * Character rendering data - a minimal set of information about equipment and dyes used for rendering.
 * COMPONENT TYPE: CharacterRenderData
**/
export class DestinyResponsesDestinyCharacterResponseRenderData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesCharactersDestinyCharacterRenderComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyCharacterResponseUninstancedItemComponents
/** 
 * The set of components belonging to the player's UNinstanced items. Because apparently now those too can have information relevant to the character's state.
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
**/
export class DestinyResponsesDestinyCharacterResponseUninstancedItemComponents extends SpeakeasyBase {
  @SpeakeasyMetadata()
  objectives?: DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent;
}


// DestinyResponsesDestinyCharacterResponse
/** 
 * The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.
**/
export class DestinyResponsesDestinyCharacterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activities?: DestinyResponsesDestinyCharacterResponseActivities;

  @SpeakeasyMetadata()
  character?: DestinyResponsesDestinyCharacterResponseCharacter;

  @SpeakeasyMetadata()
  collectibles?: DestinyResponsesDestinyCharacterResponseCollectibles;

  @SpeakeasyMetadata()
  currencyLookups?: DestinyResponsesDestinyCharacterResponseCurrencyLookups;

  @SpeakeasyMetadata()
  equipment?: DestinyResponsesDestinyCharacterResponseEquipment;

  @SpeakeasyMetadata()
  inventory?: DestinyResponsesDestinyCharacterResponseInventory;

  @SpeakeasyMetadata()
  itemComponents?: DestinyResponsesDestinyCharacterResponseItemComponents;

  @SpeakeasyMetadata()
  kiosks?: DestinyResponsesDestinyCharacterResponseKiosks;

  @SpeakeasyMetadata()
  plugSets?: DestinyResponsesDestinyCharacterResponsePlugSets;

  @SpeakeasyMetadata()
  presentationNodes?: DestinyResponsesDestinyCharacterResponsePresentationNodes;

  @SpeakeasyMetadata()
  progressions?: DestinyResponsesDestinyCharacterResponseProgressions;

  @SpeakeasyMetadata()
  records?: DestinyResponsesDestinyCharacterResponseRecords;

  @SpeakeasyMetadata()
  renderData?: DestinyResponsesDestinyCharacterResponseRenderData;

  @SpeakeasyMetadata()
  uninstancedItemComponents?: DestinyResponsesDestinyCharacterResponseUninstancedItemComponents;
}
