from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyEntitiesItemsDestinyItemSocketsComponent:
    r"""DestinyEntitiesItemsDestinyItemSocketsComponent
    Instanced items can have sockets, which are slots on the item where plugs can be inserted.
    Sockets are a bit complex: be sure to examine the documentation on the DestinyInventoryItemDefinition's \"socket\" block and elsewhere on these objects for more details.
    """
    
    sockets: Optional[List[DestinyEntitiesItemsDestinyItemSocketState]] = field(default=None)
    
