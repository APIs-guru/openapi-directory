from dataclasses import dataclass, field
from typing import Enum

class FeatureTypeEnum(str, Enum):
    INTEGRAL = "Integral"
    FRACTIONAL = "Fractional"
    STRING = "String"

