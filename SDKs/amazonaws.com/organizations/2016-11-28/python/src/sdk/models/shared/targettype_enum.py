from dataclasses import dataclass, field
from typing import Enum

class TargetTypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT"
    ROOT = "ROOT"

