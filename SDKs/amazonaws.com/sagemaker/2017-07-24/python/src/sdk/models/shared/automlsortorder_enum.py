from dataclasses import dataclass, field
from enum import Enum

class AutoMlSortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

