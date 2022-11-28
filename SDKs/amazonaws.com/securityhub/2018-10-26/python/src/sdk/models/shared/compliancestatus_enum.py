from dataclasses import dataclass, field
from enum import Enum

class ComplianceStatusEnum(str, Enum):
    PASSED = "PASSED"
    WARNING = "WARNING"
    FAILED = "FAILED"
    NOT_AVAILABLE = "NOT_AVAILABLE"

