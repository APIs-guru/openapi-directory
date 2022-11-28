from dataclasses import dataclass, field
from enum import Enum

class MergeStrategyEnum(str, Enum):
    OVERWRITE = "Overwrite"
    FAIL_ON_CONFLICT = "FailOnConflict"

