from dataclasses import dataclass, field
from enum import Enum

class OrientationRequestEnum(str, Enum):
    HORIZONTAL = "horizontal"
    VERTICAL = "vertical"
    SQUARE = "square"
    PANORAMIC_HORIZONTAL = "panoramic_horizontal"
    PANORAMIC_VERTICAL = "panoramic_vertical"

