from dataclasses import dataclass, field
from typing import Enum

class ExecutionModeEnum(str, Enum):
    AUTO = "Auto"
    INTERACTIVE = "Interactive"

