from dataclasses import dataclass, field
from typing import Enum

class SegmentTypeEnum(str, Enum):
    DIMENSIONAL = "DIMENSIONAL"
    IMPORT = "IMPORT"

