from dataclasses import dataclass, field
from enum import Enum

class ReachabilityStatusEnum(str, Enum):
    PENDING = "PENDING"
    DONE = "DONE"
    EXPIRED = "EXPIRED"

