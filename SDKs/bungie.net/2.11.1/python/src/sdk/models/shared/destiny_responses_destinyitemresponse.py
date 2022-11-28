from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyResponsesDestinyItemResponseInstance:
    r"""DestinyResponsesDestinyItemResponseInstance
    Basic instance data for the item.
    COMPONENT TYPE: ItemInstances
    """
    
    data: Optional[DestinyEntitiesItemsDestinyItemInstanceComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyItemResponseItem:
    r"""DestinyResponsesDestinyItemResponseItem
    Common data for the item relevant to its non-instanced properties.
    COMPONENT TYPE: ItemCommonData
    """
    
    data: Optional[DestinyEntitiesItemsDestinyItemComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyItemResponseObjectives:
    r"""DestinyResponsesDestinyItemResponseObjectives
    Information specifically about the item's objectives.
    COMPONENT TYPE: ItemObjectives
    """
    
    data: Optional[DestinyEntitiesItemsDestinyItemObjectivesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyItemResponsePerks:
    r"""DestinyResponsesDestinyItemResponsePerks
    Information specifically about the perks currently active on the item.
    COMPONENT TYPE: ItemPerks
    """
    
    data: Optional[DestinyEntitiesItemsDestinyItemPerksComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyItemResponsePlugObjectives:
    r"""DestinyResponsesDestinyItemResponsePlugObjectives
    Information about objectives on Plugs for a given item. See the component's documentation for more info.
    COMPONENT TYPE: ItemPlugObjectives
    """
    
    data: Optional[DestinyComponentsItemsDestinyItemPlugObjectivesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyItemResponseRenderData:
    r"""DestinyResponsesDestinyItemResponseRenderData
    Information about how to render the item in 3D.
    COMPONENT TYPE: ItemRenderData
    """
    
    data: Optional[DestinyEntitiesItemsDestinyItemRenderComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyItemResponseReusablePlugs:
    r"""DestinyResponsesDestinyItemResponseReusablePlugs
    Information about the Reusable Plugs for sockets on an item. These are plugs that you can insert into the given socket regardless of if you actually own an instance of that plug: they are logic-driven plugs rather than inventory-driven.
     These may need to be combined with Plug Set component data to get a full picture of available plugs on a given socket.
     COMPONENT TYPE: ItemReusablePlugs
    """
    
    data: Optional[DestinyComponentsItemsDestinyItemReusablePlugsComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyItemResponseSockets:
    r"""DestinyResponsesDestinyItemResponseSockets
    Information about the sockets of the item: which are currently active, what potential sockets you could have and the stats/abilities/perks you can gain from them.
    COMPONENT TYPE: ItemSockets
    """
    
    data: Optional[DestinyEntitiesItemsDestinyItemSocketsComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyItemResponseStats:
    r"""DestinyResponsesDestinyItemResponseStats
    Information about the computed stats of the item: power, defense, etc...
    COMPONENT TYPE: ItemStats
    """
    
    data: Optional[DestinyEntitiesItemsDestinyItemStatsComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyItemResponseTalentGrid:
    r"""DestinyResponsesDestinyItemResponseTalentGrid
    Information about the talent grid attached to the item. Talent nodes can provide a variety of benefits and abilities, and in Destiny 2 are used almost exclusively for the character's \"Builds\".
    COMPONENT TYPE: ItemTalentGrids
    """
    
    data: Optional[DestinyEntitiesItemsDestinyItemTalentGridComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyItemResponse:
    r"""DestinyResponsesDestinyItemResponse
    The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an \"itemInstanceId\": for those, get your information from the DestinyInventoryDefinition.
    """
    
    character_id: Optional[int] = field(default=None)
    instance: Optional[DestinyResponsesDestinyItemResponseInstance] = field(default=None)
    item: Optional[DestinyResponsesDestinyItemResponseItem] = field(default=None)
    objectives: Optional[DestinyResponsesDestinyItemResponseObjectives] = field(default=None)
    perks: Optional[DestinyResponsesDestinyItemResponsePerks] = field(default=None)
    plug_objectives: Optional[DestinyResponsesDestinyItemResponsePlugObjectives] = field(default=None)
    render_data: Optional[DestinyResponsesDestinyItemResponseRenderData] = field(default=None)
    reusable_plugs: Optional[DestinyResponsesDestinyItemResponseReusablePlugs] = field(default=None)
    sockets: Optional[DestinyResponsesDestinyItemResponseSockets] = field(default=None)
    stats: Optional[DestinyResponsesDestinyItemResponseStats] = field(default=None)
    talent_grid: Optional[DestinyResponsesDestinyItemResponseTalentGrid] = field(default=None)
    
