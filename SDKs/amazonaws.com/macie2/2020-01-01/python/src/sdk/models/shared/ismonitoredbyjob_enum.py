from dataclasses import dataclass, field
from enum import Enum

class IsMonitoredByJobEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    UNKNOWN = "UNKNOWN"

