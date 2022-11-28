from dataclasses import dataclass, field
from enum import Enum

class AvailabilityEnum(str, Enum):
    ALL = "all"
    AVAILABLE = "available"

