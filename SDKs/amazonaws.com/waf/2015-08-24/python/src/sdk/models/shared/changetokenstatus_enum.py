from dataclasses import dataclass, field
from enum import Enum

class ChangeTokenStatusEnum(str, Enum):
    PROVISIONED = "PROVISIONED"
    PENDING = "PENDING"
    INSYNC = "INSYNC"

