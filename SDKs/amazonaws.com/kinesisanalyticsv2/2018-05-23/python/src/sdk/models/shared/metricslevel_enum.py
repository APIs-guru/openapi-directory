from dataclasses import dataclass, field
from typing import Enum

class MetricsLevelEnum(str, Enum):
    APPLICATION = "APPLICATION"
    TASK = "TASK"
    OPERATOR = "OPERATOR"
    PARALLELISM = "PARALLELISM"

