from dataclasses import dataclass, field
from typing import Enum

class ComputeEnum(str, Enum):
    VALUE = "VALUE"
    STANDARD = "STANDARD"
    PERFORMANCE = "PERFORMANCE"
    POWER = "POWER"
    GRAPHICS = "GRAPHICS"
    POWERPRO = "POWERPRO"
    GRAPHICSPRO = "GRAPHICSPRO"

