from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyHistoricalStatsDestinyActivityHistoryResults:
    activities: Optional[List[DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup]] = field(default=None)
    
