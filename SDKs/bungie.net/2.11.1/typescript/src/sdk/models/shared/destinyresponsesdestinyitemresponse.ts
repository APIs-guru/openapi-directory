import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// DestinyResponsesDestinyItemResponseInstance
/** 
 * Basic instance data for the item.
 * COMPONENT TYPE: ItemInstances
**/
export class DestinyResponsesDestinyItemResponseInstance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesItemsDestinyItemInstanceComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyItemResponseItem
/** 
 * Common data for the item relevant to its non-instanced properties.
 * COMPONENT TYPE: ItemCommonData
**/
export class DestinyResponsesDestinyItemResponseItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesItemsDestinyItemComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyItemResponseObjectives
/** 
 * Information specifically about the item's objectives.
 * COMPONENT TYPE: ItemObjectives
**/
export class DestinyResponsesDestinyItemResponseObjectives extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesItemsDestinyItemObjectivesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyItemResponsePerks
/** 
 * Information specifically about the perks currently active on the item.
 * COMPONENT TYPE: ItemPerks
**/
export class DestinyResponsesDestinyItemResponsePerks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesItemsDestinyItemPerksComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyItemResponsePlugObjectives
/** 
 * Information about objectives on Plugs for a given item. See the component's documentation for more info.
 * COMPONENT TYPE: ItemPlugObjectives
**/
export class DestinyResponsesDestinyItemResponsePlugObjectives extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsItemsDestinyItemPlugObjectivesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyItemResponseRenderData
/** 
 * Information about how to render the item in 3D.
 * COMPONENT TYPE: ItemRenderData
**/
export class DestinyResponsesDestinyItemResponseRenderData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesItemsDestinyItemRenderComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyItemResponseReusablePlugs
/** 
 * Information about the Reusable Plugs for sockets on an item. These are plugs that you can insert into the given socket regardless of if you actually own an instance of that plug: they are logic-driven plugs rather than inventory-driven.
 *  These may need to be combined with Plug Set component data to get a full picture of available plugs on a given socket.
 *  COMPONENT TYPE: ItemReusablePlugs
**/
export class DestinyResponsesDestinyItemResponseReusablePlugs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsItemsDestinyItemReusablePlugsComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyItemResponseSockets
/** 
 * Information about the sockets of the item: which are currently active, what potential sockets you could have and the stats/abilities/perks you can gain from them.
 * COMPONENT TYPE: ItemSockets
**/
export class DestinyResponsesDestinyItemResponseSockets extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesItemsDestinyItemSocketsComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyItemResponseStats
/** 
 * Information about the computed stats of the item: power, defense, etc...
 * COMPONENT TYPE: ItemStats
**/
export class DestinyResponsesDestinyItemResponseStats extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesItemsDestinyItemStatsComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyItemResponseTalentGrid
/** 
 * Information about the talent grid attached to the item. Talent nodes can provide a variety of benefits and abilities, and in Destiny 2 are used almost exclusively for the character's "Builds".
 * COMPONENT TYPE: ItemTalentGrids
**/
export class DestinyResponsesDestinyItemResponseTalentGrid extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesItemsDestinyItemTalentGridComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyItemResponse
/** 
 * The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an "itemInstanceId": for those, get your information from the DestinyInventoryDefinition.
**/
export class DestinyResponsesDestinyItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  characterId?: number;

  @SpeakeasyMetadata()
  instance?: DestinyResponsesDestinyItemResponseInstance;

  @SpeakeasyMetadata()
  item?: DestinyResponsesDestinyItemResponseItem;

  @SpeakeasyMetadata()
  objectives?: DestinyResponsesDestinyItemResponseObjectives;

  @SpeakeasyMetadata()
  perks?: DestinyResponsesDestinyItemResponsePerks;

  @SpeakeasyMetadata()
  plugObjectives?: DestinyResponsesDestinyItemResponsePlugObjectives;

  @SpeakeasyMetadata()
  renderData?: DestinyResponsesDestinyItemResponseRenderData;

  @SpeakeasyMetadata()
  reusablePlugs?: DestinyResponsesDestinyItemResponseReusablePlugs;

  @SpeakeasyMetadata()
  sockets?: DestinyResponsesDestinyItemResponseSockets;

  @SpeakeasyMetadata()
  stats?: DestinyResponsesDestinyItemResponseStats;

  @SpeakeasyMetadata()
  talentGrid?: DestinyResponsesDestinyItemResponseTalentGrid;
}
