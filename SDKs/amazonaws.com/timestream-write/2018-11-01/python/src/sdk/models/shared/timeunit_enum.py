from dataclasses import dataclass, field
from enum import Enum

class TimeUnitEnum(str, Enum):
    MILLISECONDS = "MILLISECONDS"
    SECONDS = "SECONDS"
    MICROSECONDS = "MICROSECONDS"
    NANOSECONDS = "NANOSECONDS"

