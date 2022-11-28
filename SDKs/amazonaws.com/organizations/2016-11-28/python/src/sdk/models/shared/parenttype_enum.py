from dataclasses import dataclass, field
from enum import Enum

class ParentTypeEnum(str, Enum):
    ROOT = "ROOT"
    ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT"

