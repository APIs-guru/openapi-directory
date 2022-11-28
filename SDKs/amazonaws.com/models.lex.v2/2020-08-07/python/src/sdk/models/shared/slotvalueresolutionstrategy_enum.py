from dataclasses import dataclass, field
from enum import Enum

class SlotValueResolutionStrategyEnum(str, Enum):
    ORIGINAL_VALUE = "OriginalValue"
    TOP_RESOLUTION = "TopResolution"

