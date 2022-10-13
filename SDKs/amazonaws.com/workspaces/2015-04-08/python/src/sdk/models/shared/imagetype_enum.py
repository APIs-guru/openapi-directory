from dataclasses import dataclass, field
from typing import Enum

class ImageTypeEnum(str, Enum):
    OWNED = "OWNED"
    SHARED = "SHARED"

