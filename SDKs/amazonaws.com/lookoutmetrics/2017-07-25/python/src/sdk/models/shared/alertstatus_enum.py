from dataclasses import dataclass, field
from typing import Enum

class AlertStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

