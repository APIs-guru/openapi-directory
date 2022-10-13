from dataclasses import dataclass, field
from typing import Enum

class AvailabilityEnum(str, Enum):
    ALL = "all"
    AVAILABLE = "available"

