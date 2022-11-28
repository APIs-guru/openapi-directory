from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyComponentsCollectiblesDestinyCollectiblesComponent:
    collectibles: Optional[dict[str, DestinyComponentsCollectiblesDestinyCollectibleComponent]] = field(default=None)
    collection_badges_root_node_hash: Optional[int] = field(default=None)
    collection_categories_root_node_hash: Optional[int] = field(default=None)
    
