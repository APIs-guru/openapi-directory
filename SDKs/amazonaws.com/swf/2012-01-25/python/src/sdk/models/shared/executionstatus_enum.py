from dataclasses import dataclass, field
from enum import Enum

class ExecutionStatusEnum(str, Enum):
    OPEN = "OPEN"
    CLOSED = "CLOSED"

