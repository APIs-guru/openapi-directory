from dataclasses import dataclass, field
from enum import Enum

class ComplianceStatusEnum(str, Enum):
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"

