import { SpeakeasyBase } from "../../../internal/utils";
/**
 * IF populated, this item supports Energy mechanics (i.e. Armor 2.0), and these are the current details of its energy type and available capacity to spend energy points.
**/
export declare class DestinyEntitiesItemsDestinyItemInstanceComponentEnergy extends SpeakeasyBase {
    energyCapacity?: number;
    energyType?: number;
    energyTypeHash?: number;
    energyUnused?: number;
    energyUsed?: number;
}
/**
 * The item stat that we consider to be "primary" for the item. For instance, this would be "Attack" for Weapons or "Defense" for armor.
**/
export declare class DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat extends SpeakeasyBase {
    statHash?: number;
    value?: number;
}
/**
 * If an item is "instanced", this will contain information about the item's instance that doesn't fit easily into other components. One might say this is the "essential" instance data for the item.
 * Items are instanced if they require information or state that can vary. For instance, weapons are Instanced: they are given a unique identifier, uniquely generated stats, and can have their properties altered. Non-instanced items have none of these things: for instance, Glimmer has no unique properties aside from how much of it you own.
 * You can tell from an item's definition whether it will be instanced or not by looking at the DestinyInventoryItemDefinition's definition.inventory.isInstanceItem property.
**/
export declare class DestinyEntitiesItemsDestinyItemInstanceComponent extends SpeakeasyBase {
    breakerType?: number;
    breakerTypeHash?: number;
    canEquip?: boolean;
    cannotEquipReason?: number;
    damageType?: number;
    damageTypeHash?: number;
    energy?: DestinyEntitiesItemsDestinyItemInstanceComponentEnergy;
    equipRequiredLevel?: number;
    isEquipped?: boolean;
    itemLevel?: number;
    primaryStat?: DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat;
    quality?: number;
    unlockHashesRequiredToEquip?: number[];
}
