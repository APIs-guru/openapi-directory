from dataclasses import dataclass, field
from enum import Enum

class SegmentTypeEnum(str, Enum):
    TECHNICAL_CUE = "TECHNICAL_CUE"
    SHOT = "SHOT"

