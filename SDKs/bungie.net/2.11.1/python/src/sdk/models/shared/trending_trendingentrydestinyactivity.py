from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class TrendingTrendingEntryDestinyActivity:
    activity_hash: Optional[int] = field(default=None)
    status: Optional[DestinyActivitiesDestinyPublicActivityStatus] = field(default=None)
    
