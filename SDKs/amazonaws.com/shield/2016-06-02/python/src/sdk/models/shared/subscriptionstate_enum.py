from dataclasses import dataclass, field
from enum import Enum

class SubscriptionStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

