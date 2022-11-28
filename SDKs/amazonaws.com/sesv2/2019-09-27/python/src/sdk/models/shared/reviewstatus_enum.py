from dataclasses import dataclass, field
from enum import Enum

class ReviewStatusEnum(str, Enum):
    PENDING = "PENDING"
    FAILED = "FAILED"
    GRANTED = "GRANTED"
    DENIED = "DENIED"

