from dataclasses import dataclass, field
from typing import Enum

class TracingModeEnum(str, Enum):
    ACTIVE = "Active"
    PASS_THROUGH = "PassThrough"

