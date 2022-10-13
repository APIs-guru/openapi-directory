from dataclasses import dataclass, field
from typing import Enum

class PersonTrackingSortByEnum(str, Enum):
    INDEX = "INDEX"
    TIMESTAMP = "TIMESTAMP"

