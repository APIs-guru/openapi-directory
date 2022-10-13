from dataclasses import dataclass, field
from typing import Enum

class ParentTypeEnum(str, Enum):
    ROOT = "ROOT"
    ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT"

