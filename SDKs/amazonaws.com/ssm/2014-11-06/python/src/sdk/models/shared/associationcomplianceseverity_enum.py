from dataclasses import dataclass, field
from enum import Enum

class AssociationComplianceSeverityEnum(str, Enum):
    CRITICAL = "CRITICAL"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"
    UNSPECIFIED = "UNSPECIFIED"

