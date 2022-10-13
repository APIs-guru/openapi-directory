from dataclasses import dataclass, field
from typing import Enum

class ComplianceStatusEnum(str, Enum):
    PASSED = "PASSED"
    WARNING = "WARNING"
    FAILED = "FAILED"
    NOT_AVAILABLE = "NOT_AVAILABLE"

