from dataclasses import dataclass, field
from typing import Enum

class ReviewStatusEnum(str, Enum):
    PENDING = "PENDING"
    FAILED = "FAILED"
    GRANTED = "GRANTED"
    DENIED = "DENIED"

