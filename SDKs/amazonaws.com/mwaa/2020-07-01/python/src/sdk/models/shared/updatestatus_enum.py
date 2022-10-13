from dataclasses import dataclass, field
from typing import Enum

class UpdateStatusEnum(str, Enum):
    SUCCESS = "SUCCESS"
    PENDING = "PENDING"
    FAILED = "FAILED"

