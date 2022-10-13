from dataclasses import dataclass, field
from typing import Enum

class AccountStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    SUSPENDED = "SUSPENDED"

