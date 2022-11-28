from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyResponsesDestinyItemChangeResponse:
    added_inventory_items: Optional[List[DestinyEntitiesItemsDestinyItemComponent]] = field(default=None)
    item: Optional[DestinyResponsesDestinyItemResponse] = field(default=None)
    removed_inventory_items: Optional[List[DestinyEntitiesItemsDestinyItemComponent]] = field(default=None)
    
