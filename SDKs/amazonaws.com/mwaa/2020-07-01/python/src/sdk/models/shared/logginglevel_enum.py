from dataclasses import dataclass, field
from typing import Enum

class LoggingLevelEnum(str, Enum):
    CRITICAL = "CRITICAL"
    ERROR = "ERROR"
    WARNING = "WARNING"
    INFO = "INFO"
    DEBUG = "DEBUG"

