from dataclasses import dataclass, field
from enum import Enum

class MultiRegionKeyTypeEnum(str, Enum):
    PRIMARY = "PRIMARY"
    REPLICA = "REPLICA"

