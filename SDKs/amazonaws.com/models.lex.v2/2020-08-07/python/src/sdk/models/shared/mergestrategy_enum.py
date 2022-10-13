from dataclasses import dataclass, field
from typing import Enum

class MergeStrategyEnum(str, Enum):
    OVERWRITE = "Overwrite"
    FAIL_ON_CONFLICT = "FailOnConflict"

