from dataclasses import dataclass, field
from enum import Enum

class CaptureModeEnum(str, Enum):
    INPUT = "Input"
    OUTPUT = "Output"

