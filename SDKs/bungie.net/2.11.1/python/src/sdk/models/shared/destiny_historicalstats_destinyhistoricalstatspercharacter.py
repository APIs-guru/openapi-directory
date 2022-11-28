from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyHistoricalStatsDestinyHistoricalStatsPerCharacter:
    character_id: Optional[int] = field(default=None)
    deleted: Optional[bool] = field(default=None)
    merged: Optional[DestinyHistoricalStatsDestinyHistoricalStatsByPeriod] = field(default=None)
    results: Optional[dict[str, DestinyHistoricalStatsDestinyHistoricalStatsByPeriod]] = field(default=None)
    
