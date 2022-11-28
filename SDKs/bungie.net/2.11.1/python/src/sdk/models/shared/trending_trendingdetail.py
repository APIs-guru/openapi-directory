from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class TrendingTrendingDetail:
    creation: Optional[TrendingTrendingEntryCommunityCreation] = field(default=None)
    destiny_activity: Optional[TrendingTrendingEntryDestinyActivity] = field(default=None)
    destiny_item: Optional[TrendingTrendingEntryDestinyItem] = field(default=None)
    destiny_ritual: Optional[TrendingTrendingEntryDestinyRitual] = field(default=None)
    entity_type: Optional[int] = field(default=None)
    identifier: Optional[str] = field(default=None)
    news: Optional[TrendingTrendingEntryNews] = field(default=None)
    support: Optional[TrendingTrendingEntrySupportArticle] = field(default=None)
    
