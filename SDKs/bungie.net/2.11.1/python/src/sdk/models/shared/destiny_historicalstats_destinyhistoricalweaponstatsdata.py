from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyHistoricalStatsDestinyHistoricalWeaponStatsData:
    weapons: Optional[List[DestinyHistoricalStatsDestinyHistoricalWeaponStats]] = field(default=None)
    
