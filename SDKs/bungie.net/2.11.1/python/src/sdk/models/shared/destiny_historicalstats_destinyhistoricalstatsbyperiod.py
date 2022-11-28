from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyHistoricalStatsDestinyHistoricalStatsByPeriod:
    all_time: Optional[dict[str, DestinyHistoricalStatsDestinyHistoricalStatsValue]] = field(default=None)
    all_time_tier1: Optional[dict[str, DestinyHistoricalStatsDestinyHistoricalStatsValue]] = field(default=None)
    all_time_tier2: Optional[dict[str, DestinyHistoricalStatsDestinyHistoricalStatsValue]] = field(default=None)
    all_time_tier3: Optional[dict[str, DestinyHistoricalStatsDestinyHistoricalStatsValue]] = field(default=None)
    daily: Optional[List[DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup]] = field(default=None)
    monthly: Optional[List[DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup]] = field(default=None)
    
