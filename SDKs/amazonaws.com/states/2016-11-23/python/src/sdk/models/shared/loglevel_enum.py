from dataclasses import dataclass, field
from typing import Enum

class LogLevelEnum(str, Enum):
    ALL = "ALL"
    ERROR = "ERROR"
    FATAL = "FATAL"
    OFF = "OFF"

