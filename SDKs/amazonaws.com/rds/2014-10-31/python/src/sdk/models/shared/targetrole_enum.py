from dataclasses import dataclass, field
from enum import Enum

class TargetRoleEnum(str, Enum):
    READ_WRITE = "READ_WRITE"
    READ_ONLY = "READ_ONLY"
    UNKNOWN = "UNKNOWN"

