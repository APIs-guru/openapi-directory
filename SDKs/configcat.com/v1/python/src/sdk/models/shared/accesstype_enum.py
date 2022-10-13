from dataclasses import dataclass, field
from typing import Enum

class AccessTypeEnum(str, Enum):
    READ_ONLY = "readOnly"
    FULL = "full"
    CUSTOM = "custom"

