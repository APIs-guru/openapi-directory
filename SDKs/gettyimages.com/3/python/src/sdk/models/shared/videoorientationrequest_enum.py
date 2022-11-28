from dataclasses import dataclass, field
from enum import Enum

class VideoOrientationRequestEnum(str, Enum):
    HORIZONTAL = "horizontal"
    VERTICAL = "vertical"

