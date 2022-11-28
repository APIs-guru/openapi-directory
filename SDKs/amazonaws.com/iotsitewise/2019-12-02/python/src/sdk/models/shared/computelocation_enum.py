from dataclasses import dataclass, field
from enum import Enum

class ComputeLocationEnum(str, Enum):
    EDGE = "EDGE"
    CLOUD = "CLOUD"

