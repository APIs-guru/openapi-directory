from dataclasses import dataclass, field
from typing import Enum

class DistanceUnitEnum(str, Enum):
    KILOMETERS = "Kilometers"
    MILES = "Miles"

