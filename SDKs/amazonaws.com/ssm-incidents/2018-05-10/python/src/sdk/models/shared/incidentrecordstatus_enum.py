from dataclasses import dataclass, field
from typing import Enum

class IncidentRecordStatusEnum(str, Enum):
    OPEN = "OPEN"
    RESOLVED = "RESOLVED"

