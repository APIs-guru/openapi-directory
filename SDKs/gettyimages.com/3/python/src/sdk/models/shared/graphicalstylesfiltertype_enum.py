from dataclasses import dataclass, field
from enum import Enum

class GraphicalStylesFilterTypeEnum(str, Enum):
    INCLUDE = "include"
    EXCLUDE = "exclude"

