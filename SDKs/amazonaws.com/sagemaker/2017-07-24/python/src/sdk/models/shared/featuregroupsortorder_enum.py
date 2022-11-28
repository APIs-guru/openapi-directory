from dataclasses import dataclass, field
from enum import Enum

class FeatureGroupSortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"

