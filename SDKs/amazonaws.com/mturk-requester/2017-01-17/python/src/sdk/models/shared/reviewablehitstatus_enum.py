from dataclasses import dataclass, field
from typing import Enum

class ReviewableHitStatusEnum(str, Enum):
    REVIEWABLE = "Reviewable"
    REVIEWING = "Reviewing"

