from dataclasses import dataclass, field
from typing import Enum

class VideoOrientationRequestEnum(str, Enum):
    HORIZONTAL = "horizontal"
    VERTICAL = "vertical"

