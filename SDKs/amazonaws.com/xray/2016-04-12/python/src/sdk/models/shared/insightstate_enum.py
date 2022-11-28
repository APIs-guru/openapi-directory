from dataclasses import dataclass, field
from enum import Enum

class InsightStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    CLOSED = "CLOSED"

