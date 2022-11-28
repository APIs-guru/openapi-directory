from dataclasses import dataclass, field
from enum import Enum

class ImageSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

