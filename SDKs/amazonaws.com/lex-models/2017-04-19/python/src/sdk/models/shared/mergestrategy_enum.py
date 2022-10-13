from dataclasses import dataclass, field
from typing import Enum

class MergeStrategyEnum(str, Enum):
    OVERWRITE_LATEST = "OVERWRITE_LATEST"
    FAIL_ON_CONFLICT = "FAIL_ON_CONFLICT"

