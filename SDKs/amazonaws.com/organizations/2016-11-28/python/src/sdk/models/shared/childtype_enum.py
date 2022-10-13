from dataclasses import dataclass, field
from typing import Enum

class ChildTypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT"

