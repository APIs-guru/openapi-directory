from dataclasses import dataclass, field
from typing import Enum

class ChangeStatusEnum(str, Enum):
    PREPARING = "PREPARING"
    APPLYING = "APPLYING"
    SUCCEEDED = "SUCCEEDED"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"

