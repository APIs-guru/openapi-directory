from dataclasses import dataclass, field
from typing import Enum

class CalendarStateEnum(str, Enum):
    OPEN = "OPEN"
    CLOSED = "CLOSED"

