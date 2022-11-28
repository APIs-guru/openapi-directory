from dataclasses import dataclass, field
from enum import Enum

class MonitorErrorCodeEnum(str, Enum):
    INTERNAL_FAILURE = "INTERNAL_FAILURE"
    VALIDATION_ERROR = "VALIDATION_ERROR"
    LIMIT_EXCEEDED = "LIMIT_EXCEEDED"

