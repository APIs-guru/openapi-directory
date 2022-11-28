from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class TrendingTrendingCategory:
    category_id: Optional[str] = field(default=None)
    category_name: Optional[str] = field(default=None)
    entries: Optional[SearchResultOfTrendingEntry] = field(default=None)
    
