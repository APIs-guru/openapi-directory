from dataclasses import dataclass, field
from enum import Enum

class SearchResourcesComparatorEnum(str, Enum):
    EQ = "EQ"
    NE = "NE"

