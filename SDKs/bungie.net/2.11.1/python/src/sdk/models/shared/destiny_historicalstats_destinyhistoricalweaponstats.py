from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyHistoricalStatsDestinyHistoricalWeaponStats:
    reference_id: Optional[int] = field(default=None)
    values: Optional[dict[str, DestinyHistoricalStatsDestinyHistoricalStatsValue]] = field(default=None)
    
