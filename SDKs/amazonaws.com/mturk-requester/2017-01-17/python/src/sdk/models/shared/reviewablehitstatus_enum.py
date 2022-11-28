from dataclasses import dataclass, field
from enum import Enum

class ReviewableHitStatusEnum(str, Enum):
    REVIEWABLE = "Reviewable"
    REVIEWING = "Reviewing"

