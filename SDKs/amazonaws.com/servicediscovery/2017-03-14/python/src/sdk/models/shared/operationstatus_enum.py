from dataclasses import dataclass, field
from typing import Enum

class OperationStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    PENDING = "PENDING"
    SUCCESS = "SUCCESS"
    FAIL = "FAIL"

