from dataclasses import dataclass, field
from typing import Enum

class ChangeTokenStatusEnum(str, Enum):
    PROVISIONED = "PROVISIONED"
    PENDING = "PENDING"
    INSYNC = "INSYNC"

