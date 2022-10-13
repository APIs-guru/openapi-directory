from dataclasses import dataclass, field
from typing import Enum

class EnvironmentAccessTypeEnum(str, Enum):
    FULL = "full"
    READ_ONLY = "readOnly"
    NONE = "none"

