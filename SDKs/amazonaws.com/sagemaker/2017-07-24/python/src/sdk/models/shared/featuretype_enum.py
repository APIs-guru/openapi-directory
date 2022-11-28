from dataclasses import dataclass, field
from enum import Enum

class FeatureTypeEnum(str, Enum):
    INTEGRAL = "Integral"
    FRACTIONAL = "Fractional"
    STRING = "String"

