from dataclasses import dataclass, field
from enum import Enum

class DistributionEnum(str, Enum):
    RANDOM = "Random"
    BY_LOG_STREAM = "ByLogStream"

