from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyComponentsInventoryDestinyPlatformSilverComponent:
    platform_silver: Optional[dict[str, DestinyEntitiesItemsDestinyItemComponent]] = field(default=None)
    
