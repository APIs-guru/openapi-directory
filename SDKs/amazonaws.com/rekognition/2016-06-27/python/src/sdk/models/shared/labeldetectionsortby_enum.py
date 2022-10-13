from dataclasses import dataclass, field
from typing import Enum

class LabelDetectionSortByEnum(str, Enum):
    NAME = "NAME"
    TIMESTAMP = "TIMESTAMP"

