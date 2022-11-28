from dataclasses import dataclass, field
from enum import Enum

class VehicleWeightUnitEnum(str, Enum):
    KILOGRAMS = "Kilograms"
    POUNDS = "Pounds"

