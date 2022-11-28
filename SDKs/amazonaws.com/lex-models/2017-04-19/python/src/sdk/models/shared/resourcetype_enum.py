from dataclasses import dataclass, field
from enum import Enum

class ResourceTypeEnum(str, Enum):
    BOT = "BOT"
    INTENT = "INTENT"
    SLOT_TYPE = "SLOT_TYPE"

