from dataclasses import dataclass, field
from typing import Enum

class StatusEnum(str, Enum):
    BUILDING = "BUILDING"
    READY = "READY"
    READY_BASIC_TESTING = "READY_BASIC_TESTING"
    FAILED = "FAILED"
    NOT_BUILT = "NOT_BUILT"

