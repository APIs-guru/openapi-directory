from dataclasses import dataclass, field
from enum import Enum

class StateMachineTypeEnum(str, Enum):
    STANDARD = "STANDARD"
    EXPRESS = "EXPRESS"

