from dataclasses import dataclass, field
from enum import Enum

class ComputeEnum(str, Enum):
    VALUE = "VALUE"
    STANDARD = "STANDARD"
    PERFORMANCE = "PERFORMANCE"
    POWER = "POWER"
    GRAPHICS = "GRAPHICS"
    POWERPRO = "POWERPRO"
    GRAPHICSPRO = "GRAPHICSPRO"

