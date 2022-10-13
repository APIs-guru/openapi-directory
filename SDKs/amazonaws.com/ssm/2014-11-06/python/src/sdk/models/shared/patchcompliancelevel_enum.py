from dataclasses import dataclass, field
from typing import Enum

class PatchComplianceLevelEnum(str, Enum):
    CRITICAL = "CRITICAL"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"
    INFORMATIONAL = "INFORMATIONAL"
    UNSPECIFIED = "UNSPECIFIED"

