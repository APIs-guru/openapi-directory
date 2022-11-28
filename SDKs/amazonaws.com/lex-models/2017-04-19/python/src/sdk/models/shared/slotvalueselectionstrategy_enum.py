from dataclasses import dataclass, field
from enum import Enum

class SlotValueSelectionStrategyEnum(str, Enum):
    ORIGINAL_VALUE = "ORIGINAL_VALUE"
    TOP_RESOLUTION = "TOP_RESOLUTION"

