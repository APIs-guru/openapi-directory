from dataclasses import dataclass, field
from typing import Enum

class TeeShirtSizeEnum(str, Enum):
    X_SMALL = "x_small"
    SMALL = "small"
    MEDIUM = "medium"
    LARGE = "large"
    X_LARGE = "x_large"
    XX_LARGE = "xx_large"
    VECTOR = "vector"

