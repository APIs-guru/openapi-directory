from dataclasses import dataclass, field
from enum import Enum

class DistanceUnitEnum(str, Enum):
    KILOMETERS = "Kilometers"
    MILES = "Miles"

