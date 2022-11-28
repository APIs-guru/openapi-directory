from dataclasses import dataclass, field
from enum import Enum

class OrientationCorrectionEnum(str, Enum):
    ROTATE_0 = "ROTATE_0"
    ROTATE_90 = "ROTATE_90"
    ROTATE_180 = "ROTATE_180"
    ROTATE_270 = "ROTATE_270"

