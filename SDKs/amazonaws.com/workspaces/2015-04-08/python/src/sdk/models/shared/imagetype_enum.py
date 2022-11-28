from dataclasses import dataclass, field
from enum import Enum

class ImageTypeEnum(str, Enum):
    OWNED = "OWNED"
    SHARED = "SHARED"

