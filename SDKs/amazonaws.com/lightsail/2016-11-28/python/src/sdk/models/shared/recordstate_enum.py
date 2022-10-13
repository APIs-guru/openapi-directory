from dataclasses import dataclass, field
from typing import Enum

class RecordStateEnum(str, Enum):
    STARTED = "Started"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"

