from dataclasses import dataclass, field
from enum import Enum

class StatusCodeEnum(str, Enum):
    COMPLETE = "Complete"
    INTERNAL_ERROR = "InternalError"
    PARTIAL_DATA = "PartialData"

