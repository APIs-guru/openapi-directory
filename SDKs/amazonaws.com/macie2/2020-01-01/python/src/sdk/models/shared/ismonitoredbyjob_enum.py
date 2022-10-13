from dataclasses import dataclass, field
from typing import Enum

class IsMonitoredByJobEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    UNKNOWN = "UNKNOWN"

