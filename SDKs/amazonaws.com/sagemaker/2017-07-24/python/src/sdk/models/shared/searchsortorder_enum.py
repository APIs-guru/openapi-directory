from dataclasses import dataclass, field
from typing import Enum

class SearchSortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

