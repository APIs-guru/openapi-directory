from dataclasses import dataclass, field
from typing import Enum

class LastRunErrorStatusCodeEnum(str, Enum):
    NONE = "NONE"
    ERROR = "ERROR"

