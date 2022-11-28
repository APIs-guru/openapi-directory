from dataclasses import dataclass, field
from enum import Enum

class RecordStateEnum(str, Enum):
    STARTED = "Started"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"

