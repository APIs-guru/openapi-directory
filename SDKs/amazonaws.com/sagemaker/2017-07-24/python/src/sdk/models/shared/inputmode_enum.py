from dataclasses import dataclass, field
from enum import Enum

class InputModeEnum(str, Enum):
    PIPE = "Pipe"
    FILE = "File"

