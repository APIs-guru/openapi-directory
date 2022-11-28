from dataclasses import dataclass, field
from enum import Enum

class UsageLimitFeatureTypeEnum(str, Enum):
    SPECTRUM = "spectrum"
    CONCURRENCY_SCALING = "concurrency-scaling"

