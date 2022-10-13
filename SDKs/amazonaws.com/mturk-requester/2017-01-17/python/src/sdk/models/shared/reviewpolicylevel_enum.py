from dataclasses import dataclass, field
from typing import Enum

class ReviewPolicyLevelEnum(str, Enum):
    ASSIGNMENT = "Assignment"
    HIT = "HIT"

