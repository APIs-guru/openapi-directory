from dataclasses import dataclass, field
from enum import Enum

class ChildTypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT"

