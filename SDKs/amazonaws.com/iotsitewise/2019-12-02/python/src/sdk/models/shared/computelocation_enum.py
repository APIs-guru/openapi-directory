from dataclasses import dataclass, field
from typing import Enum

class ComputeLocationEnum(str, Enum):
    EDGE = "EDGE"
    CLOUD = "CLOUD"

