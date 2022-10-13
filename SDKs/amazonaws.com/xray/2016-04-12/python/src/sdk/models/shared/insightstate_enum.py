from dataclasses import dataclass, field
from typing import Enum

class InsightStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    CLOSED = "CLOSED"

