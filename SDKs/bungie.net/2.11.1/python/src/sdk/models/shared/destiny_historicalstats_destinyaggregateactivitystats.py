from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyHistoricalStatsDestinyAggregateActivityStats:
    activity_hash: Optional[int] = field(default=None)
    values: Optional[dict[str, DestinyHistoricalStatsDestinyHistoricalStatsValue]] = field(default=None)
    
