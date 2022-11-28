from dataclasses import dataclass, field
from enum import Enum

class FacetSortEnum(str, Enum):
    COUNT = "count"
    INDEX = "index"

