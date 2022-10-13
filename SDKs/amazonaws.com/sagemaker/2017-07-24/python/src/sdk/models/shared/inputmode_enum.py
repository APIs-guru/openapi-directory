from dataclasses import dataclass, field
from typing import Enum

class InputModeEnum(str, Enum):
    PIPE = "Pipe"
    FILE = "File"

