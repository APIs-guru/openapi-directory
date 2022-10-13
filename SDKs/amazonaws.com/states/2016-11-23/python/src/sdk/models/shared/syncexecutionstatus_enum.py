from dataclasses import dataclass, field
from typing import Enum

class SyncExecutionStatusEnum(str, Enum):
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    TIMED_OUT = "TIMED_OUT"

