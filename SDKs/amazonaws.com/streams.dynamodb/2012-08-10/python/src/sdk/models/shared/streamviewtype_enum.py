from dataclasses import dataclass, field
from typing import Enum

class StreamViewTypeEnum(str, Enum):
    NEW_IMAGE = "NEW_IMAGE"
    OLD_IMAGE = "OLD_IMAGE"
    NEW_AND_OLD_IMAGES = "NEW_AND_OLD_IMAGES"
    KEYS_ONLY = "KEYS_ONLY"

