from dataclasses import dataclass, field
from typing import Enum

class EventSourcePositionEnum(str, Enum):
    TRIM_HORIZON = "TRIM_HORIZON"
    LATEST = "LATEST"
    AT_TIMESTAMP = "AT_TIMESTAMP"

