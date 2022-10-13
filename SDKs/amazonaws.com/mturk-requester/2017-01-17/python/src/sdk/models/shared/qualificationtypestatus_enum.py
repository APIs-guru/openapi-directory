from dataclasses import dataclass, field
from typing import Enum

class QualificationTypeStatusEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"

