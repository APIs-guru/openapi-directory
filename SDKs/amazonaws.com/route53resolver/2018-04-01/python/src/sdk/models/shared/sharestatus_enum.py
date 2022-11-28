from dataclasses import dataclass, field
from enum import Enum

class ShareStatusEnum(str, Enum):
    NOT_SHARED = "NOT_SHARED"
    SHARED_WITH_ME = "SHARED_WITH_ME"
    SHARED_BY_ME = "SHARED_BY_ME"

