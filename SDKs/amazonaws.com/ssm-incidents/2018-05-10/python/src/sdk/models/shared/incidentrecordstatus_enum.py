from dataclasses import dataclass, field
from enum import Enum

class IncidentRecordStatusEnum(str, Enum):
    OPEN = "OPEN"
    RESOLVED = "RESOLVED"

