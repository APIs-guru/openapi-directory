from dataclasses import dataclass, field
from typing import Enum

class SeverityDescriptionEnum(str, Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"

