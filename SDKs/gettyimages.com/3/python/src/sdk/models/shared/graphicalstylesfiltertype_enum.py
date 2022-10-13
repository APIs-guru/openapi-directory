from dataclasses import dataclass, field
from typing import Enum

class GraphicalStylesFilterTypeEnum(str, Enum):
    INCLUDE = "include"
    EXCLUDE = "exclude"

