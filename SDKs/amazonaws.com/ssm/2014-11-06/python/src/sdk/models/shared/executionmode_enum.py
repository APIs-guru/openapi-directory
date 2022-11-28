from dataclasses import dataclass, field
from enum import Enum

class ExecutionModeEnum(str, Enum):
    AUTO = "Auto"
    INTERACTIVE = "Interactive"

