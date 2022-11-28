from dataclasses import dataclass, field
from typing import Any,List,Optional
from . import *


@dataclass
class DestinyComponentsPlugSetsDestinyPlugSetsComponent:
    r"""DestinyComponentsPlugSetsDestinyPlugSetsComponent
    Sockets may refer to a \"Plug Set\": a set of reusable plugs that may be shared across multiple sockets (or even, in theory, multiple sockets over multiple items).
    This is the set of those plugs that we came across in the users' inventory, along with the values for plugs in the set. Any given set in this component may be represented in Character and Profile-level, as some plugs may be Profile-level restricted, and some character-level restricted. (note that the ones that are even more specific will remain on the actual socket component itself, as they cannot be reused)
    """
    
    plugs: Optional[dict[str, List[DestinySocketsDestinyItemPlug]]] = field(default=None)
    
