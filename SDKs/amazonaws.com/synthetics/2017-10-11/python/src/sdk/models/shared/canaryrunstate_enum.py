from dataclasses import dataclass, field
from enum import Enum

class CanaryRunStateEnum(str, Enum):
    RUNNING = "RUNNING"
    PASSED = "PASSED"
    FAILED = "FAILED"

