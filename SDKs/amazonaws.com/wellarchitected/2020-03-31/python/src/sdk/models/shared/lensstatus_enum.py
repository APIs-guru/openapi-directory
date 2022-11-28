from dataclasses import dataclass, field
from enum import Enum

class LensStatusEnum(str, Enum):
    CURRENT = "CURRENT"
    NOT_CURRENT = "NOT_CURRENT"
    DEPRECATED = "DEPRECATED"

