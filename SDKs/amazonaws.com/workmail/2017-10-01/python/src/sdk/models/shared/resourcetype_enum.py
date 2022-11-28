from dataclasses import dataclass, field
from enum import Enum

class ResourceTypeEnum(str, Enum):
    ROOM = "ROOM"
    EQUIPMENT = "EQUIPMENT"

