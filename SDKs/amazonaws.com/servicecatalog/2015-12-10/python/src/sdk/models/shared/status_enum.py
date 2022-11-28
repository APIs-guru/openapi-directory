from dataclasses import dataclass, field
from enum import Enum

class StatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    CREATING = "CREATING"
    FAILED = "FAILED"

