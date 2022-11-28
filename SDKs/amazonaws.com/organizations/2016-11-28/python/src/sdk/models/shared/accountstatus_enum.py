from dataclasses import dataclass, field
from enum import Enum

class AccountStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    SUSPENDED = "SUSPENDED"

