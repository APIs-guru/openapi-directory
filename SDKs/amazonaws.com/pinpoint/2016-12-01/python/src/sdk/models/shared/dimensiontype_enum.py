from dataclasses import dataclass, field
from typing import Enum

class DimensionTypeEnum(str, Enum):
    INCLUSIVE = "INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"

