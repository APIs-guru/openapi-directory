from dataclasses import dataclass, field
from typing import Enum

class CanaryRunStateEnum(str, Enum):
    RUNNING = "RUNNING"
    PASSED = "PASSED"
    FAILED = "FAILED"

