from dataclasses import dataclass, field
from enum import Enum

class ObjectiveStatusEnum(str, Enum):
    SUCCEEDED = "Succeeded"
    PENDING = "Pending"
    FAILED = "Failed"

