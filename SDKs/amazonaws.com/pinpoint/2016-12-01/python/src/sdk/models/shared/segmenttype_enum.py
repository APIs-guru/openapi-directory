from dataclasses import dataclass, field
from enum import Enum

class SegmentTypeEnum(str, Enum):
    DIMENSIONAL = "DIMENSIONAL"
    IMPORT = "IMPORT"

