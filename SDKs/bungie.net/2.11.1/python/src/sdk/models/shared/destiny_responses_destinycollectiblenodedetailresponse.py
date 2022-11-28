from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents:
    r"""DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents
    Item components, keyed by the item hash of the items pointed at collectibles found under the requested Presentation Node.
    NOTE: I had a lot of hemming and hawing about whether these should be keyed by collectible hash or item hash... but ultimately having it be keyed by item hash meant that UI that already uses DestinyItemComponentSet data wouldn't have to have a special override to do the collectible -> item lookup once you delve into an item's details, and it also meant that you didn't have to remember that the Hash being used as the key for plugSets was different from the Hash being used for the other Dictionaries. As a result, using the Item Hash felt like the least crappy solution.
    We may all come to regret this decision. We will see.
    COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
    """
    
    instances: Optional[DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent] = field(default=None)
    objectives: Optional[DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent] = field(default=None)
    perks: Optional[DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent] = field(default=None)
    plug_objectives: Optional[DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent] = field(default=None)
    plug_states: Optional[DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent] = field(default=None)
    render_data: Optional[DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent] = field(default=None)
    reusable_plugs: Optional[DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent] = field(default=None)
    sockets: Optional[DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent] = field(default=None)
    stats: Optional[DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent] = field(default=None)
    talent_grids: Optional[DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles:
    r"""DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles
    COMPONENT TYPE: Collectibles
    """
    
    data: Optional[DestinyComponentsCollectiblesDestinyCollectiblesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCollectibleNodeDetailResponse:
    r"""DestinyResponsesDestinyCollectibleNodeDetailResponse
    Returns the detailed information about a Collectible Presentation Node and any Collectibles that are direct descendants.
    """
    
    collectible_item_components: Optional[DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents] = field(default=None)
    collectibles: Optional[DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles] = field(default=None)
    
