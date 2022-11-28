from dataclasses import dataclass, field
from enum import Enum

class QualificationTypeStatusEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"

