from dataclasses import dataclass, field
from typing import Enum

class StatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    CREATING = "CREATING"
    FAILED = "FAILED"

