from dataclasses import dataclass, field
from typing import Enum

class CaptureModeEnum(str, Enum):
    INPUT = "Input"
    OUTPUT = "Output"

