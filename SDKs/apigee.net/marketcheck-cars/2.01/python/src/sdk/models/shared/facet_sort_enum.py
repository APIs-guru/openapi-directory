from dataclasses import dataclass, field
from typing import Enum

class FacetSortEnum(str, Enum):
    COUNT = "count"
    INDEX = "index"

