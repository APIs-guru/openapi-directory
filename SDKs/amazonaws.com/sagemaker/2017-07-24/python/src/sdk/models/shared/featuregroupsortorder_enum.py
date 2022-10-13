from dataclasses import dataclass, field
from typing import Enum

class FeatureGroupSortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

