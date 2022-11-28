from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DestinyEntitiesItemsDestinyItemInstanceComponentEnergy:
    r"""DestinyEntitiesItemsDestinyItemInstanceComponentEnergy
    IF populated, this item supports Energy mechanics (i.e. Armor 2.0), and these are the current details of its energy type and available capacity to spend energy points.
    """
    
    energy_capacity: Optional[int] = field(default=None)
    energy_type: Optional[int] = field(default=None)
    energy_type_hash: Optional[int] = field(default=None)
    energy_unused: Optional[int] = field(default=None)
    energy_used: Optional[int] = field(default=None)
    

@dataclass
class DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat:
    r"""DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat
    The item stat that we consider to be \"primary\" for the item. For instance, this would be \"Attack\" for Weapons or \"Defense\" for armor.
    """
    
    stat_hash: Optional[int] = field(default=None)
    value: Optional[int] = field(default=None)
    

@dataclass
class DestinyEntitiesItemsDestinyItemInstanceComponent:
    r"""DestinyEntitiesItemsDestinyItemInstanceComponent
    If an item is \"instanced\", this will contain information about the item's instance that doesn't fit easily into other components. One might say this is the \"essential\" instance data for the item.
    Items are instanced if they require information or state that can vary. For instance, weapons are Instanced: they are given a unique identifier, uniquely generated stats, and can have their properties altered. Non-instanced items have none of these things: for instance, Glimmer has no unique properties aside from how much of it you own.
    You can tell from an item's definition whether it will be instanced or not by looking at the DestinyInventoryItemDefinition's definition.inventory.isInstanceItem property.
    """
    
    breaker_type: Optional[int] = field(default=None)
    breaker_type_hash: Optional[int] = field(default=None)
    can_equip: Optional[bool] = field(default=None)
    cannot_equip_reason: Optional[int] = field(default=None)
    damage_type: Optional[int] = field(default=None)
    damage_type_hash: Optional[int] = field(default=None)
    energy: Optional[DestinyEntitiesItemsDestinyItemInstanceComponentEnergy] = field(default=None)
    equip_required_level: Optional[int] = field(default=None)
    is_equipped: Optional[bool] = field(default=None)
    item_level: Optional[int] = field(default=None)
    primary_stat: Optional[DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat] = field(default=None)
    quality: Optional[int] = field(default=None)
    unlock_hashes_required_to_equip: Optional[List[int]] = field(default=None)
    
