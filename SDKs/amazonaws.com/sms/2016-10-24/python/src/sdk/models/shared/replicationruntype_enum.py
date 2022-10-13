from dataclasses import dataclass, field
from typing import Enum

class ReplicationRunTypeEnum(str, Enum):
    ON_DEMAND = "ON_DEMAND"
    AUTOMATIC = "AUTOMATIC"

