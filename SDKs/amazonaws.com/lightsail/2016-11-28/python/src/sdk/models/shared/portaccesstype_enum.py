from dataclasses import dataclass, field
from enum import Enum

class PortAccessTypeEnum(str, Enum):
    PUBLIC = "Public"
    PRIVATE = "Private"

