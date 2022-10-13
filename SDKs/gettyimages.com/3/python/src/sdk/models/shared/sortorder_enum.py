from dataclasses import dataclass, field
from typing import Enum

class SortOrderEnum(str, Enum):
    BEST_MATCH = "best_match"
    MOST_POPULAR = "most_popular"
    NEWEST = "newest"
    OLDEST = "oldest"
    RANDOM = "random"

