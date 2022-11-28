from dataclasses import dataclass, field
from enum import Enum

class InputStartingPositionEnum(str, Enum):
    NOW = "NOW"
    TRIM_HORIZON = "TRIM_HORIZON"
    LAST_STOPPED_POINT = "LAST_STOPPED_POINT"

