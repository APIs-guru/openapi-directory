from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyComponentsItemsDestinyItemReusablePlugsComponent:
    plugs: Optional[dict[str, List[DestinySocketsDestinyItemPlugBase]]] = field(default=None)
    
