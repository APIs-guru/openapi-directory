from dataclasses import dataclass, field
from typing import Enum

class ConfigurationStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS"
    UPDATE_FAILED = "UPDATE_FAILED"

