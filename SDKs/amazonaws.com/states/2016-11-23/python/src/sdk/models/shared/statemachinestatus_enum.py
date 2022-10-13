from dataclasses import dataclass, field
from typing import Enum

class StateMachineStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

