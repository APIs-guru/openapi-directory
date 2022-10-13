from dataclasses import dataclass, field
from typing import Enum

class SortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

