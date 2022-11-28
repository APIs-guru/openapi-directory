from dataclasses import dataclass, field
from enum import Enum

class ReviewActionStatusEnum(str, Enum):
    INTENDED = "Intended"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"
    CANCELLED = "Cancelled"

