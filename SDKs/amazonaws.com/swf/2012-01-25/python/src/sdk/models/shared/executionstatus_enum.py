from dataclasses import dataclass, field
from typing import Enum

class ExecutionStatusEnum(str, Enum):
    OPEN = "OPEN"
    CLOSED = "CLOSED"

