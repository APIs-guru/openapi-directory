from dataclasses import dataclass, field
from typing import Enum

class ReachabilityStatusEnum(str, Enum):
    PENDING = "PENDING"
    DONE = "DONE"
    EXPIRED = "EXPIRED"

