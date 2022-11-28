from dataclasses import dataclass, field
from enum import Enum

class ReleaseStatusEnum(str, Enum):
    RELEASE_NOT_IMPORTANT = "release_not_important"
    FULLY_RELEASED = "fully_released"

