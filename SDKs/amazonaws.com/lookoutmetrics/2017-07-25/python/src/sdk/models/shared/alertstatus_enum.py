from dataclasses import dataclass, field
from enum import Enum

class AlertStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

