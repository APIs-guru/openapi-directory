from dataclasses import dataclass, field
from enum import Enum

class CalendarStateEnum(str, Enum):
    OPEN = "OPEN"
    CLOSED = "CLOSED"

