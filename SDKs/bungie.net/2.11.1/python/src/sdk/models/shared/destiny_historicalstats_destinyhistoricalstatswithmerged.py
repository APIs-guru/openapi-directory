from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyHistoricalStatsDestinyHistoricalStatsWithMerged:
    merged: Optional[DestinyHistoricalStatsDestinyHistoricalStatsByPeriod] = field(default=None)
    results: Optional[dict[str, DestinyHistoricalStatsDestinyHistoricalStatsByPeriod]] = field(default=None)
    
