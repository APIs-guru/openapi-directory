from dataclasses import dataclass, field
from enum import Enum

class LoggingLevelEnum(str, Enum):
    ERROR = "ERROR"
    INFO = "INFO"
    OFF = "OFF"

