from dataclasses import dataclass, field
from typing import Enum

class DistributionEnum(str, Enum):
    RANDOM = "Random"
    BY_LOG_STREAM = "ByLogStream"

