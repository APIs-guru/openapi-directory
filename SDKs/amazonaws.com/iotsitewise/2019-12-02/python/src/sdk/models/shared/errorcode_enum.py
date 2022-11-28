from dataclasses import dataclass, field
from enum import Enum

class ErrorCodeEnum(str, Enum):
    VALIDATION_ERROR = "VALIDATION_ERROR"
    INTERNAL_FAILURE = "INTERNAL_FAILURE"

