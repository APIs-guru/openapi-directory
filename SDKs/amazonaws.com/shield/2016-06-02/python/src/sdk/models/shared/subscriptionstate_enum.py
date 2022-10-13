from dataclasses import dataclass, field
from typing import Enum

class SubscriptionStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

