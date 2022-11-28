from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyCharacterDestinyItemPeerView:
    r"""DestinyCharacterDestinyItemPeerView
    Bare minimum summary information for an item, for the sake of 3D rendering the item.
    """
    
    dyes: Optional[List[DestinyDyeReference]] = field(default=None)
    item_hash: Optional[int] = field(default=None)
    
