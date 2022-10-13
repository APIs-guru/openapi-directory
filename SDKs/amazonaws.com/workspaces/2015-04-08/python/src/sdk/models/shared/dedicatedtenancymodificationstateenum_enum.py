from dataclasses import dataclass, field
from typing import Enum

class DedicatedTenancyModificationStateEnumEnum(str, Enum):
    PENDING = "PENDING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

