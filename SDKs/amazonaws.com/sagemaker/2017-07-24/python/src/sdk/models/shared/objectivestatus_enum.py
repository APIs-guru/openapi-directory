from dataclasses import dataclass, field
from typing import Enum

class ObjectiveStatusEnum(str, Enum):
    SUCCEEDED = "Succeeded"
    PENDING = "Pending"
    FAILED = "Failed"

