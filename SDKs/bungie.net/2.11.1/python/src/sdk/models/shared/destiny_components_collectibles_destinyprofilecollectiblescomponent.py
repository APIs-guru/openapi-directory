from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent:
    collectibles: Optional[dict[str, DestinyComponentsCollectiblesDestinyCollectibleComponent]] = field(default=None)
    collection_badges_root_node_hash: Optional[int] = field(default=None)
    collection_categories_root_node_hash: Optional[int] = field(default=None)
    newness_flagged_collectible_hashes: Optional[List[int]] = field(default=None)
    recent_collectible_hashes: Optional[List[int]] = field(default=None)
    
