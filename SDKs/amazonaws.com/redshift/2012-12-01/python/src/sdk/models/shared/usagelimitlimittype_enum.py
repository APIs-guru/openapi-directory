from dataclasses import dataclass, field
from enum import Enum

class UsageLimitLimitTypeEnum(str, Enum):
    TIME = "time"
    DATA_SCANNED = "data-scanned"

