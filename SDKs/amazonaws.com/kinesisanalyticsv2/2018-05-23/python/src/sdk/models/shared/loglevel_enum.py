from dataclasses import dataclass, field
from enum import Enum

class LogLevelEnum(str, Enum):
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"
    DEBUG = "DEBUG"

