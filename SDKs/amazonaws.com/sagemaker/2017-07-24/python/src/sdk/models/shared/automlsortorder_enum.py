from dataclasses import dataclass, field
from typing import Enum

class AutoMlSortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

