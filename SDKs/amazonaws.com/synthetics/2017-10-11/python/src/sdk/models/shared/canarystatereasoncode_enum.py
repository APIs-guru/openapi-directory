from dataclasses import dataclass, field
from enum import Enum

class CanaryStateReasonCodeEnum(str, Enum):
    INVALID_PERMISSIONS = "INVALID_PERMISSIONS"

