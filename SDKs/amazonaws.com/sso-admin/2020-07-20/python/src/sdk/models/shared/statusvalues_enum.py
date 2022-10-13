from dataclasses import dataclass, field
from typing import Enum

class StatusValuesEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"

