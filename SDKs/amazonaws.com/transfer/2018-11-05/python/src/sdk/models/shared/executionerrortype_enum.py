from dataclasses import dataclass, field
from typing import Enum

class ExecutionErrorTypeEnum(str, Enum):
    PERMISSION_DENIED = "PERMISSION_DENIED"

