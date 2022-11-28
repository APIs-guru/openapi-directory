from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyComponentsItemsDestinyItemPlugComponent:
    r"""DestinyComponentsItemsDestinyItemPlugComponent
    Plugs are non-instanced items that can provide Stat and Perk benefits when socketed into an instanced item. Items have Sockets, and Plugs are inserted into Sockets.
    This component finds all items that are considered \"Plugs\" in your inventory, and return information about the plug aside from any specific Socket into which it could be inserted.
    """
    
    can_insert: Optional[bool] = field(default=None)
    enable_fail_indexes: Optional[List[int]] = field(default=None)
    enabled: Optional[bool] = field(default=None)
    insert_fail_indexes: Optional[List[int]] = field(default=None)
    plug_item_hash: Optional[int] = field(default=None)
    plug_objectives: Optional[List[DestinyQuestsDestinyObjectiveProgress]] = field(default=None)
    
