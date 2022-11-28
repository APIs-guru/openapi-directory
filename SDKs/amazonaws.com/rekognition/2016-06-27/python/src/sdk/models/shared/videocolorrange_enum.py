from dataclasses import dataclass, field
from enum import Enum

class VideoColorRangeEnum(str, Enum):
    FULL = "FULL"
    LIMITED = "LIMITED"

