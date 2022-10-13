from dataclasses import dataclass, field
from typing import Enum

class MultiRegionKeyTypeEnum(str, Enum):
    PRIMARY = "PRIMARY"
    REPLICA = "REPLICA"

