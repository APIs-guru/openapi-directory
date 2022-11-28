from dataclasses import dataclass, field
from enum import Enum

class TracingModeEnum(str, Enum):
    ACTIVE = "Active"
    PASS_THROUGH = "PassThrough"

