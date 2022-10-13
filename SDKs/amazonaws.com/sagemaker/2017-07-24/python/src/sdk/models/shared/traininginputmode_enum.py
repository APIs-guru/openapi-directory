from dataclasses import dataclass, field
from typing import Enum

class TrainingInputModeEnum(str, Enum):
    PIPE = "Pipe"
    FILE = "File"

