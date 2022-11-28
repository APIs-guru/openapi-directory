from dataclasses import dataclass, field
from enum import Enum

class MetricsLevelEnum(str, Enum):
    APPLICATION = "APPLICATION"
    TASK = "TASK"
    OPERATOR = "OPERATOR"
    PARALLELISM = "PARALLELISM"

