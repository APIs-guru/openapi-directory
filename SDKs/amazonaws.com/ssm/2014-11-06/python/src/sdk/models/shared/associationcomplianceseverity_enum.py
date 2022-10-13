from dataclasses import dataclass, field
from typing import Enum

class AssociationComplianceSeverityEnum(str, Enum):
    CRITICAL = "CRITICAL"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"
    UNSPECIFIED = "UNSPECIFIED"

