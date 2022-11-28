from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyEntitiesItemsDestinyItemPerksComponent:
    r"""DestinyEntitiesItemsDestinyItemPerksComponent
    Instanced items can have perks: benefits that the item bestows.
    These are related to DestinySandboxPerkDefinition, and sometimes - but not always - have human readable info. When they do, they are the icons and text that you see in an item's tooltip.
    Talent Grids, Sockets, and the item itself can apply Perks, which are then summarized here for your convenience.
    """
    
    perks: Optional[List[DestinyPerksDestinyPerkReference]] = field(default=None)
    
