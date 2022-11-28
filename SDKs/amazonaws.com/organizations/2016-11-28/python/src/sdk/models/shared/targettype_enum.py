from dataclasses import dataclass, field
from enum import Enum

class TargetTypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT"
    ROOT = "ROOT"

