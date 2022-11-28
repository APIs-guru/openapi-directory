from dataclasses import dataclass, field
from enum import Enum

class ProcessingS3InputModeEnum(str, Enum):
    PIPE = "Pipe"
    FILE = "File"

