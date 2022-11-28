from dataclasses import dataclass, field
from enum import Enum

class ExecutionErrorTypeEnum(str, Enum):
    PERMISSION_DENIED = "PERMISSION_DENIED"

