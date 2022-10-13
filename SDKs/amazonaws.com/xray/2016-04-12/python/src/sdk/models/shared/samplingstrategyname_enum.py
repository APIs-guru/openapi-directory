from dataclasses import dataclass, field
from typing import Enum

class SamplingStrategyNameEnum(str, Enum):
    PARTIAL_SCAN = "PartialScan"
    FIXED_RATE = "FixedRate"

