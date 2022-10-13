from dataclasses import dataclass, field
from typing import Enum

class PortStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"

