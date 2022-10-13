from dataclasses import dataclass, field
from typing import Enum

class SearchResourcesComparatorEnum(str, Enum):
    EQ = "EQ"
    NE = "NE"

