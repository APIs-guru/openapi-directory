from dataclasses import dataclass, field
from enum import Enum

class DimensionTypeEnum(str, Enum):
    INCLUSIVE = "INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"

