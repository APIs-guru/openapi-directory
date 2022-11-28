from dataclasses import dataclass, field
from enum import Enum

class LastRunErrorStatusCodeEnum(str, Enum):
    NONE = "NONE"
    ERROR = "ERROR"

