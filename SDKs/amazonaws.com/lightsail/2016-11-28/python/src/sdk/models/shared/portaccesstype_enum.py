from dataclasses import dataclass, field
from typing import Enum

class PortAccessTypeEnum(str, Enum):
    PUBLIC = "Public"
    PRIVATE = "Private"

