from dataclasses import dataclass, field
from typing import Enum

class ApplicationModeEnum(str, Enum):
    STREAMING = "STREAMING"
    INTERACTIVE = "INTERACTIVE"

