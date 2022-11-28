from dataclasses import dataclass, field
from enum import Enum

class TrainingInputModeEnum(str, Enum):
    PIPE = "Pipe"
    FILE = "File"

