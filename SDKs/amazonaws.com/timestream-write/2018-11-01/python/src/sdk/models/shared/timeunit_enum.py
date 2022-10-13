from dataclasses import dataclass, field
from typing import Enum

class TimeUnitEnum(str, Enum):
    MILLISECONDS = "MILLISECONDS"
    SECONDS = "SECONDS"
    MICROSECONDS = "MICROSECONDS"
    NANOSECONDS = "NANOSECONDS"

