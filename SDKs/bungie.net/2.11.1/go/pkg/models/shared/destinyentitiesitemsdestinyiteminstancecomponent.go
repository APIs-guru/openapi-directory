package shared

// DestinyEntitiesItemsDestinyItemInstanceComponentEnergy
// IF populated, this item supports Energy mechanics (i.e. Armor 2.0), and these are the current details of its energy type and available capacity to spend energy points.
type DestinyEntitiesItemsDestinyItemInstanceComponentEnergy struct {
	EnergyCapacity *int32
	EnergyType     *int32
	EnergyTypeHash *int64
	EnergyUnused   *int32
	EnergyUsed     *int32
}

// DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat
// The item stat that we consider to be "primary" for the item. For instance, this would be "Attack" for Weapons or "Defense" for armor.
type DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat struct {
	StatHash *int64
	Value    *int32
}

// DestinyEntitiesItemsDestinyItemInstanceComponent
// If an item is "instanced", this will contain information about the item's instance that doesn't fit easily into other components. One might say this is the "essential" instance data for the item.
// Items are instanced if they require information or state that can vary. For instance, weapons are Instanced: they are given a unique identifier, uniquely generated stats, and can have their properties altered. Non-instanced items have none of these things: for instance, Glimmer has no unique properties aside from how much of it you own.
// You can tell from an item's definition whether it will be instanced or not by looking at the DestinyInventoryItemDefinition's definition.inventory.isInstanceItem property.
type DestinyEntitiesItemsDestinyItemInstanceComponent struct {
	BreakerType                 *int32
	BreakerTypeHash             *int64
	CanEquip                    *bool
	CannotEquipReason           *int32
	DamageType                  *int32
	DamageTypeHash              *int64
	Energy                      *DestinyEntitiesItemsDestinyItemInstanceComponentEnergy
	EquipRequiredLevel          *int32
	IsEquipped                  *bool
	ItemLevel                   *int32
	PrimaryStat                 *DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat
	Quality                     *int32
	UnlockHashesRequiredToEquip []int64
}
