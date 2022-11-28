from dataclasses import dataclass, field
from enum import Enum

class SearchSortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

