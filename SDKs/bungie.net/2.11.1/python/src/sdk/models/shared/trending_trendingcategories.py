from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TrendingTrendingCategories:
    categories: Optional[List[TrendingTrendingCategory]] = field(default=None)
    
