from dataclasses import dataclass, field
from enum import Enum

class ApplicationModeEnum(str, Enum):
    STREAMING = "STREAMING"
    INTERACTIVE = "INTERACTIVE"

