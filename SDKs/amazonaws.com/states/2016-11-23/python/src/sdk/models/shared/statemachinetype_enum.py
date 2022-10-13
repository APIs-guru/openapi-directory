from dataclasses import dataclass, field
from typing import Enum

class StateMachineTypeEnum(str, Enum):
    STANDARD = "STANDARD"
    EXPRESS = "EXPRESS"

