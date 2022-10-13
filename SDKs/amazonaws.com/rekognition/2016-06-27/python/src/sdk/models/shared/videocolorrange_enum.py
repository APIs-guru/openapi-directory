from dataclasses import dataclass, field
from typing import Enum

class VideoColorRangeEnum(str, Enum):
    FULL = "FULL"
    LIMITED = "LIMITED"

