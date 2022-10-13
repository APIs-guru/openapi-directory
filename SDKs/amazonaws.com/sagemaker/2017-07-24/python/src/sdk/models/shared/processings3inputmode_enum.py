from dataclasses import dataclass, field
from typing import Enum

class ProcessingS3InputModeEnum(str, Enum):
    PIPE = "Pipe"
    FILE = "File"

