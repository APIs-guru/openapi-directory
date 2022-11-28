import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyEntitiesItemsDestinyItemInstanceComponentEnergy
/** 
 * IF populated, this item supports Energy mechanics (i.e. Armor 2.0), and these are the current details of its energy type and available capacity to spend energy points.
**/
export class DestinyEntitiesItemsDestinyItemInstanceComponentEnergy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  energyCapacity?: number;

  @SpeakeasyMetadata()
  energyType?: number;

  @SpeakeasyMetadata()
  energyTypeHash?: number;

  @SpeakeasyMetadata()
  energyUnused?: number;

  @SpeakeasyMetadata()
  energyUsed?: number;
}


// DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat
/** 
 * The item stat that we consider to be "primary" for the item. For instance, this would be "Attack" for Weapons or "Defense" for armor.
**/
export class DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat extends SpeakeasyBase {
  @SpeakeasyMetadata()
  statHash?: number;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyEntitiesItemsDestinyItemInstanceComponent
/** 
 * If an item is "instanced", this will contain information about the item's instance that doesn't fit easily into other components. One might say this is the "essential" instance data for the item.
 * Items are instanced if they require information or state that can vary. For instance, weapons are Instanced: they are given a unique identifier, uniquely generated stats, and can have their properties altered. Non-instanced items have none of these things: for instance, Glimmer has no unique properties aside from how much of it you own.
 * You can tell from an item's definition whether it will be instanced or not by looking at the DestinyInventoryItemDefinition's definition.inventory.isInstanceItem property.
**/
export class DestinyEntitiesItemsDestinyItemInstanceComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  breakerType?: number;

  @SpeakeasyMetadata()
  breakerTypeHash?: number;

  @SpeakeasyMetadata()
  canEquip?: boolean;

  @SpeakeasyMetadata()
  cannotEquipReason?: number;

  @SpeakeasyMetadata()
  damageType?: number;

  @SpeakeasyMetadata()
  damageTypeHash?: number;

  @SpeakeasyMetadata()
  energy?: DestinyEntitiesItemsDestinyItemInstanceComponentEnergy;

  @SpeakeasyMetadata()
  equipRequiredLevel?: number;

  @SpeakeasyMetadata()
  isEquipped?: boolean;

  @SpeakeasyMetadata()
  itemLevel?: number;

  @SpeakeasyMetadata()
  primaryStat?: DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat;

  @SpeakeasyMetadata()
  quality?: number;

  @SpeakeasyMetadata()
  unlockHashesRequiredToEquip?: number[];
}
