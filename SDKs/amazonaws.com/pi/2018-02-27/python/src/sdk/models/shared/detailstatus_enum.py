from dataclasses import dataclass, field
from enum import Enum

class DetailStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    PROCESSING = "PROCESSING"
    UNAVAILABLE = "UNAVAILABLE"

