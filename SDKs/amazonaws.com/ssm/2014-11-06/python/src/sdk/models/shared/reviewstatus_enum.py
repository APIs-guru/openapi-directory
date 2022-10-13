from dataclasses import dataclass, field
from typing import Enum

class ReviewStatusEnum(str, Enum):
    APPROVED = "APPROVED"
    NOT_REVIEWED = "NOT_REVIEWED"
    PENDING = "PENDING"
    REJECTED = "REJECTED"

