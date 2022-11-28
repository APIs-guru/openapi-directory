from dataclasses import dataclass, field
from enum import Enum

class StatusEnum(str, Enum):
    PENDING = "PENDING"
    DEPLOYED = "DEPLOYED"
    PENDING_DELETION = "PENDING_DELETION"

