from dataclasses import dataclass, field
from typing import Enum

class DimensionUnitEnum(str, Enum):
    METERS = "Meters"
    FEET = "Feet"

