from dataclasses import dataclass, field
from typing import Enum

class ImageSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

