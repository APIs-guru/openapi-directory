import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Activity data - info about current activities available to the player.
 * COMPONENT TYPE: CharacterActivities
**/
export declare class DestinyResponsesDestinyCharacterResponseActivities extends SpeakeasyBase {
    data?: DestinyEntitiesCharactersDestinyCharacterActivitiesComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Base information about the character in question.
 * COMPONENT TYPE: Characters
**/
export declare class DestinyResponsesDestinyCharacterResponseCharacter extends SpeakeasyBase {
    data?: DestinyEntitiesCharactersDestinyCharacterComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Collectibles
**/
export declare class DestinyResponsesDestinyCharacterResponseCollectibles extends SpeakeasyBase {
    data?: DestinyComponentsCollectiblesDestinyCollectiblesComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
 * COMPONENT TYPE: CurrencyLookups
**/
export declare class DestinyResponsesDestinyCharacterResponseCurrencyLookups extends SpeakeasyBase {
    data?: DestinyComponentsInventoryDestinyCurrenciesComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Equipped items on the character.
 * COMPONENT TYPE: CharacterEquipment
**/
export declare class DestinyResponsesDestinyCharacterResponseEquipment extends SpeakeasyBase {
    data?: DestinyEntitiesInventoryDestinyInventoryComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * The character-level non-equipped inventory items.
 * COMPONENT TYPE: CharacterInventories
**/
export declare class DestinyResponsesDestinyCharacterResponseInventory extends SpeakeasyBase {
    data?: DestinyEntitiesInventoryDestinyInventoryComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * The set of components belonging to the player's instanced items.
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
**/
export declare class DestinyResponsesDestinyCharacterResponseItemComponents extends SpeakeasyBase {
    instances?: DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent;
    objectives?: DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent;
    perks?: DictionaryComponentResponseOfint64AndDestinyItemPerksComponent;
    plugObjectives?: DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent;
    plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;
    renderData?: DictionaryComponentResponseOfint64AndDestinyItemRenderComponent;
    reusablePlugs?: DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent;
    sockets?: DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent;
    stats?: DictionaryComponentResponseOfint64AndDestinyItemStatsComponent;
    talentGrids?: DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent;
}
/**
 * Items available from Kiosks that are available to this specific character.
 * COMPONENT TYPE: Kiosks
**/
export declare class DestinyResponsesDestinyCharacterResponseKiosks extends SpeakeasyBase {
    data?: DestinyComponentsKiosksDestinyKiosksComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are scoped to this character.
 * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
 * COMPONENT TYPE: ItemSockets
**/
export declare class DestinyResponsesDestinyCharacterResponsePlugSets extends SpeakeasyBase {
    data?: DestinyComponentsPlugSetsDestinyPlugSetsComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: PresentationNodes
**/
export declare class DestinyResponsesDestinyCharacterResponsePresentationNodes extends SpeakeasyBase {
    data?: DestinyComponentsPresentationDestinyPresentationNodesComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Character progression data, including Milestones.
 * COMPONENT TYPE: CharacterProgressions
**/
export declare class DestinyResponsesDestinyCharacterResponseProgressions extends SpeakeasyBase {
    data?: DestinyEntitiesCharactersDestinyCharacterProgressionComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Records
**/
export declare class DestinyResponsesDestinyCharacterResponseRecords extends SpeakeasyBase {
    data?: DestinyComponentsRecordsDestinyCharacterRecordsComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Character rendering data - a minimal set of information about equipment and dyes used for rendering.
 * COMPONENT TYPE: CharacterRenderData
**/
export declare class DestinyResponsesDestinyCharacterResponseRenderData extends SpeakeasyBase {
    data?: DestinyEntitiesCharactersDestinyCharacterRenderComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * The set of components belonging to the player's UNinstanced items. Because apparently now those too can have information relevant to the character's state.
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
**/
export declare class DestinyResponsesDestinyCharacterResponseUninstancedItemComponents extends SpeakeasyBase {
    objectives?: DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent;
}
/**
 * The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.
**/
export declare class DestinyResponsesDestinyCharacterResponse extends SpeakeasyBase {
    activities?: DestinyResponsesDestinyCharacterResponseActivities;
    character?: DestinyResponsesDestinyCharacterResponseCharacter;
    collectibles?: DestinyResponsesDestinyCharacterResponseCollectibles;
    currencyLookups?: DestinyResponsesDestinyCharacterResponseCurrencyLookups;
    equipment?: DestinyResponsesDestinyCharacterResponseEquipment;
    inventory?: DestinyResponsesDestinyCharacterResponseInventory;
    itemComponents?: DestinyResponsesDestinyCharacterResponseItemComponents;
    kiosks?: DestinyResponsesDestinyCharacterResponseKiosks;
    plugSets?: DestinyResponsesDestinyCharacterResponsePlugSets;
    presentationNodes?: DestinyResponsesDestinyCharacterResponsePresentationNodes;
    progressions?: DestinyResponsesDestinyCharacterResponseProgressions;
    records?: DestinyResponsesDestinyCharacterResponseRecords;
    renderData?: DestinyResponsesDestinyCharacterResponseRenderData;
    uninstancedItemComponents?: DestinyResponsesDestinyCharacterResponseUninstancedItemComponents;
}
