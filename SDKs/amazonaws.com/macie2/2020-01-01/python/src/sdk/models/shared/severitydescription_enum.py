from dataclasses import dataclass, field
from enum import Enum

class SeverityDescriptionEnum(str, Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"

