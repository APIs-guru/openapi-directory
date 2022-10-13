from dataclasses import dataclass, field
from typing import Enum

class FaceSearchSortByEnum(str, Enum):
    INDEX = "INDEX"
    TIMESTAMP = "TIMESTAMP"

