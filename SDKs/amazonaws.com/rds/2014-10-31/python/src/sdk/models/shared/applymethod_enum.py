from dataclasses import dataclass, field
from enum import Enum

class ApplyMethodEnum(str, Enum):
    IMMEDIATE = "immediate"
    PENDING_REBOOT = "pending-reboot"

