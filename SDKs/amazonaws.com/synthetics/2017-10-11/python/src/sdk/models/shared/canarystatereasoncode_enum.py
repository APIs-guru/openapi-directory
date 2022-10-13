from dataclasses import dataclass, field
from typing import Enum

class CanaryStateReasonCodeEnum(str, Enum):
    INVALID_PERMISSIONS = "INVALID_PERMISSIONS"

