from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyHistoricalStatsDestinyHistoricalStatsAccountResult:
    characters: Optional[List[DestinyHistoricalStatsDestinyHistoricalStatsPerCharacter]] = field(default=None)
    merged_all_characters: Optional[DestinyHistoricalStatsDestinyHistoricalStatsWithMerged] = field(default=None)
    merged_deleted_characters: Optional[DestinyHistoricalStatsDestinyHistoricalStatsWithMerged] = field(default=None)
    
