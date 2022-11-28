import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemInstanceComponent } from "./destinyentitiesitemsdestinyiteminstancecomponent";
import { DestinyEntitiesItemsDestinyItemComponent } from "./destinyentitiesitemsdestinyitemcomponent";
import { DestinyEntitiesItemsDestinyItemObjectivesComponent } from "./destinyentitiesitemsdestinyitemobjectivescomponent";
import { DestinyEntitiesItemsDestinyItemPerksComponent } from "./destinyentitiesitemsdestinyitemperkscomponent";
import { DestinyComponentsItemsDestinyItemPlugObjectivesComponent } from "./destinycomponentsitemsdestinyitemplugobjectivescomponent";
import { DestinyEntitiesItemsDestinyItemRenderComponent } from "./destinyentitiesitemsdestinyitemrendercomponent";
import { DestinyComponentsItemsDestinyItemReusablePlugsComponent } from "./destinycomponentsitemsdestinyitemreusableplugscomponent";
import { DestinyEntitiesItemsDestinyItemSocketsComponent } from "./destinyentitiesitemsdestinyitemsocketscomponent";
import { DestinyEntitiesItemsDestinyItemStatsComponent } from "./destinyentitiesitemsdestinyitemstatscomponent";
import { DestinyEntitiesItemsDestinyItemTalentGridComponent } from "./destinyentitiesitemsdestinyitemtalentgridcomponent";
/**
 * Basic instance data for the item.
 * COMPONENT TYPE: ItemInstances
**/
export declare class DestinyResponsesDestinyItemResponseInstance extends SpeakeasyBase {
    data?: DestinyEntitiesItemsDestinyItemInstanceComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Common data for the item relevant to its non-instanced properties.
 * COMPONENT TYPE: ItemCommonData
**/
export declare class DestinyResponsesDestinyItemResponseItem extends SpeakeasyBase {
    data?: DestinyEntitiesItemsDestinyItemComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information specifically about the item's objectives.
 * COMPONENT TYPE: ItemObjectives
**/
export declare class DestinyResponsesDestinyItemResponseObjectives extends SpeakeasyBase {
    data?: DestinyEntitiesItemsDestinyItemObjectivesComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information specifically about the perks currently active on the item.
 * COMPONENT TYPE: ItemPerks
**/
export declare class DestinyResponsesDestinyItemResponsePerks extends SpeakeasyBase {
    data?: DestinyEntitiesItemsDestinyItemPerksComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information about objectives on Plugs for a given item. See the component's documentation for more info.
 * COMPONENT TYPE: ItemPlugObjectives
**/
export declare class DestinyResponsesDestinyItemResponsePlugObjectives extends SpeakeasyBase {
    data?: DestinyComponentsItemsDestinyItemPlugObjectivesComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information about how to render the item in 3D.
 * COMPONENT TYPE: ItemRenderData
**/
export declare class DestinyResponsesDestinyItemResponseRenderData extends SpeakeasyBase {
    data?: DestinyEntitiesItemsDestinyItemRenderComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information about the Reusable Plugs for sockets on an item. These are plugs that you can insert into the given socket regardless of if you actually own an instance of that plug: they are logic-driven plugs rather than inventory-driven.
 *  These may need to be combined with Plug Set component data to get a full picture of available plugs on a given socket.
 *  COMPONENT TYPE: ItemReusablePlugs
**/
export declare class DestinyResponsesDestinyItemResponseReusablePlugs extends SpeakeasyBase {
    data?: DestinyComponentsItemsDestinyItemReusablePlugsComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information about the sockets of the item: which are currently active, what potential sockets you could have and the stats/abilities/perks you can gain from them.
 * COMPONENT TYPE: ItemSockets
**/
export declare class DestinyResponsesDestinyItemResponseSockets extends SpeakeasyBase {
    data?: DestinyEntitiesItemsDestinyItemSocketsComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information about the computed stats of the item: power, defense, etc...
 * COMPONENT TYPE: ItemStats
**/
export declare class DestinyResponsesDestinyItemResponseStats extends SpeakeasyBase {
    data?: DestinyEntitiesItemsDestinyItemStatsComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information about the talent grid attached to the item. Talent nodes can provide a variety of benefits and abilities, and in Destiny 2 are used almost exclusively for the character's "Builds".
 * COMPONENT TYPE: ItemTalentGrids
**/
export declare class DestinyResponsesDestinyItemResponseTalentGrid extends SpeakeasyBase {
    data?: DestinyEntitiesItemsDestinyItemTalentGridComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an "itemInstanceId": for those, get your information from the DestinyInventoryDefinition.
**/
export declare class DestinyResponsesDestinyItemResponse extends SpeakeasyBase {
    characterId?: number;
    instance?: DestinyResponsesDestinyItemResponseInstance;
    item?: DestinyResponsesDestinyItemResponseItem;
    objectives?: DestinyResponsesDestinyItemResponseObjectives;
    perks?: DestinyResponsesDestinyItemResponsePerks;
    plugObjectives?: DestinyResponsesDestinyItemResponsePlugObjectives;
    renderData?: DestinyResponsesDestinyItemResponseRenderData;
    reusablePlugs?: DestinyResponsesDestinyItemResponseReusablePlugs;
    sockets?: DestinyResponsesDestinyItemResponseSockets;
    stats?: DestinyResponsesDestinyItemResponseStats;
    talentGrid?: DestinyResponsesDestinyItemResponseTalentGrid;
}
