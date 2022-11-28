from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyHistoricalStatsDestinyLeaderboard:
    entries: Optional[List[DestinyHistoricalStatsDestinyLeaderboardEntry]] = field(default=None)
    stat_id: Optional[str] = field(default=None)
    
