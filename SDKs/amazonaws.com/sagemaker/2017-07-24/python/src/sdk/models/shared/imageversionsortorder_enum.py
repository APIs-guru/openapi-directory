from dataclasses import dataclass, field
from enum import Enum

class ImageVersionSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

