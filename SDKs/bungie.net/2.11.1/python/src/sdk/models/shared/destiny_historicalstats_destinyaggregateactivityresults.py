from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyHistoricalStatsDestinyAggregateActivityResults:
    activities: Optional[List[DestinyHistoricalStatsDestinyAggregateActivityStats]] = field(default=None)
    
