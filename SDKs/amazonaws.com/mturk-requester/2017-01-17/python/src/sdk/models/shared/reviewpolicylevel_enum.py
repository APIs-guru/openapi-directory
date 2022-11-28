from dataclasses import dataclass, field
from enum import Enum

class ReviewPolicyLevelEnum(str, Enum):
    ASSIGNMENT = "Assignment"
    HIT = "HIT"

