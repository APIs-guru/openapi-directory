from dataclasses import dataclass, field
from enum import Enum

class PortStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"

