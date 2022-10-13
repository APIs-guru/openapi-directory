from dataclasses import dataclass, field
from typing import Enum

class RenewTypeEnum(str, Enum):
    NONE = "None"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"

