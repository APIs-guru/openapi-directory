from dataclasses import dataclass, field
from typing import Enum

class VehicleWeightUnitEnum(str, Enum):
    KILOGRAMS = "Kilograms"
    POUNDS = "Pounds"

